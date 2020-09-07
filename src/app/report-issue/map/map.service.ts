import { Injectable } from '@angular/core';
import { Map, Marker, LngLatLike, NavigationControl, GeolocateControl } from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { AddressService } from './geocode.service';
import {take, tap} from 'rxjs/operators';
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
  }

}
