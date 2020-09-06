import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  isAerial = false;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.createMap();
  }

  toggleBaseMap(): void {

    this.isAerial = !this.isAerial;

    let style: 'aerial' | 'streets';
    if (this.isAerial) {
      style = 'aerial';
    } else {
      style = 'streets';
    }
    this.mapService.toggleBaseMap(style);
  }

}
