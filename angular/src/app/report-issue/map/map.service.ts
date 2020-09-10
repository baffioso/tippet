import { Injectable } from '@angular/core';
import { Map, Marker, LngLatLike, NavigationControl, GeolocateControl, Popup, VectorSource, GeoJSONSource } from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { AddressService } from './geocode.service';
import { take, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { kommune } from 'src/assets/kommune';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import { GeocodeAddress } from '../../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapGl: Map;
  style = 'mapbox://styles/baffioso/ck83zdrmc4b041ipeb35a18vf';
  center = [12.576634, 55.678649];
  zoom = 11;
  marker = new Marker({ color: '#e8505b' });
  currentLocation: LngLatLike;
  nearestAddress = new BehaviorSubject<GeocodeAddress | {}>({});
  withinMunicipality = new BehaviorSubject<boolean>(null);

  constructor(private addressService: AddressService) {

  }

  createMap(): void {
    this.mapGl = new Map({
      container: 'map',
      style: this.style,
      center: this.center as LngLatLike,
      zoom: this.zoom,
      accessToken: environment.mapboxToken,
    });

    this.mapGl.addControl(new NavigationControl({ showCompass: false }));

    this.mapGl.addControl(
      new GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );

    this.mapGl.on('load', () => {
      this.onLoad();
    });

    this.mapGl.on('render', () => {
      this.onRender();
    });

    this.mapGl.on('moveend', () => {
      this.onMoveEnd();
    });
  }

  onLoad(): void {
    this.mapGl.resize();
    this.addLayers();

    // Zoom to users current posistion
    navigator.geolocation.getCurrentPosition(pos => {
      const coord = { lng: pos.coords.longitude, lat: pos.coords.latitude };
      this.mapGl.flyTo({ center: coord, zoom: 17 });

      const isWithin = booleanPointInPolygon([coord.lng, coord.lat], kommune.features[0] as any);
      this.withinMunicipality.next(isWithin);

      if (this.withinMunicipality.value) {
        this.addressService.geocode(this.currentLocation)
          .pipe(
            take(1),
            tap(res => {
              this.nearestAddress.next(res);
            })
          ).subscribe();
      }
    });

    this.clickBehavior();
  }

  onMoveEnd(): void {

    // Get current location from center of map
    const center = this.mapGl.getCenter();
    this.currentLocation = center;

    // Check if current location is within municipality
    const isWithin = booleanPointInPolygon([center.lng, center.lat], kommune.features[0] as any);
    this.withinMunicipality.next(isWithin);

    // Only reversegeocode if within municipality
    if (this.withinMunicipality.value) {
      this.addressService.geocode(this.currentLocation)
        .pipe(
          take(1),
          tap(res => {
            this.nearestAddress.next(res);
          })
        ).subscribe();
    }

  }

  onRender(): void {
    const center = this.mapGl.getCenter();
    this.marker.setLngLat(center).addTo(this.mapGl);
  }


  clickBehavior(): void {
    this.mapGl.on('click', 'clusters', (e) => {
      const features = this.mapGl.queryRenderedFeatures(e.point, {
        layers: ['clusters']
      });
      const clusterId = features[0].properties.cluster_id;
      (this.mapGl.getSource('issues') as GeoJSONSource).getClusterExpansionZoom(
        clusterId,
        (err, zoom) => {
          if (err) { return; }

          this.mapGl.easeTo({
            center: features[0].geometry['coordinates'],
            zoom
          });
        }
      );
    });

    // When a click event occurs on a feature in
    // the unclustered-point layer, open a popup at
    // the location of the feature, with
    // description HTML from its properties.
    this.mapGl.on('click', 'unclustered-point', (e) => {
      const coordinates = e.features[0].geometry['coordinates'].slice();
      const category = e.features[0].properties.category;

      // Ensure that if the map is zoomed out such that
      // multiple copies of the feature are visible, the
      // popup appears over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new Popup()
        .setLngLat(coordinates)
        .setHTML(
          'Category: ' + category
        )
        .addTo(this.mapGl);
    });

    this.mapGl.on('mouseenter', 'clusters', () => {
      this.mapGl.getCanvas().style.cursor = 'pointer';
    });
    this.mapGl.on('mouseleave', 'clusters', () => {
      this.mapGl.getCanvas().style.cursor = '';
    });
  }

  toggleBaseMap(style: 'aerial' | 'streets'): void {

    switch (style) {
      case 'aerial':
        this.mapGl.setStyle('mapbox://styles/mapbox/satellite-v9');
        break;
      case 'streets':
        this.mapGl.setStyle(this.style);
        break;
      default:
        break;
    }

    this.mapGl.on('styledata', () => {
      this.addLayers();
    });

  }

  addLayers(): void {

    if (!this.mapGl.getSource('kommunegr')) {
      this.mapGl.addSource('kommunegr', {
        type: 'geojson',
        data: kommune as any
      });
    }

    if (this.mapGl.getLayer('kommunegr')) {
      this.mapGl.removeLayer('kommunegr');
    }

    this.mapGl.addLayer({
      id: 'kommunegr',
      type: 'line',
      source: 'kommunegr',
      layout: {},
      paint: {
        //   'line-color': 'red',
        //   'line-width': 2
      }
    });


    // Add issues
    // this.mapGl.addSource('issues', {
    //   type: 'vector',
    //   'tiles': [
    //     'https://tileserv.baffioso.dk/public.issues/{z}/{x}/{y}.pbf'
    //   ],
    // });

    // this.mapGl.addLayer({
    //   id: 'issues',
    //   type: 'circle',
    //   source: 'issues',
    //   'source-layer': 'public.issues',
    //   'layout': {},
    //   'paint': {
    //     'circle-color': 'rgb(53, 175, 109)',
    //   }
    // });

    this.mapGl.addSource('issues', {
      type: 'geojson',
      data: '../../../assets/issues.geojson',
      cluster: true,
      clusterMaxZoom: 18,
      clusterRadius: 50
    });


    this.mapGl.addLayer({
      id: 'clusters',
      type: 'circle',
      source: 'issues',
      filter: ['has', 'point_count'],
      paint: {
        // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
        // with three steps to implement three types of circles:
        //   * Blue, 20px circles when point count is less than 100
        //   * Yellow, 30px circles when point count is between 100 and 750
        //   * Pink, 40px circles when point count is greater than or equal to 750
        'circle-color': [
          'step',
          ['get', 'point_count'],
          '#2A9D8F',
          50,
          '#E9C46A',
          500,
          '#F4A261'
        ],
        'circle-radius': [
          'step',
          ['get', 'point_count'],
          15,
          100,
          25,
          750,
          30
        ]
      }
    });

    this.mapGl.addLayer({
      id: 'cluster-count',
      type: 'symbol',
      source: 'issues',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12
      }
    });

    this.mapGl.addLayer({
      id: 'unclustered-point',
      type: 'circle',
      source: 'issues',
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-color': '#11b4da',
        'circle-radius': 8,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#fff'
      }
    });

  }

}
