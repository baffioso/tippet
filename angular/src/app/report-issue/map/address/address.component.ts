import { Component, Input, OnInit } from '@angular/core';
import { GeocodeAddress } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() address: GeocodeAddress;
  @Input() withinMunicipality: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
