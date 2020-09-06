import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LngLatLike } from 'mapbox-gl';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { GeocodeAddress } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  geocode(coords: any): Observable<GeocodeAddress> {
    const x = coords.lng;
    const y = coords.lat;
    return this.http.get(`https://dawa.aws.dk/adgangsadresser/reverse?x=${x}&y=${y}`)
      .pipe(
        map((res: any) => {

          const vejnavn = res.vejstykke.navn;
          const husnr = res.husnr;
          const postnr = res.postnummer.nr;
          const bydel = res.postnummer.navn;

          return {
            valid: true,
            message: `${vejnavn} ${husnr}, ${postnr} ${bydel}`
          };
        })
      );
  }
}
