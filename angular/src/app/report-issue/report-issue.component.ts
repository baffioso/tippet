import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';
import { MapService } from './map/map.service';
import { STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent } from '@angular/cdk/stepper';
import { GeocodeAddress } from '../interfaces/interfaces';


@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class ReportIssueComponent implements OnInit {

  showMap = true;
  nearestAddress: GeocodeAddress | {};
  withinMunicipality: boolean;

  subAddr: Subscription;
  subWithin: Subscription;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    const subAddr = this.mapService.nearestAddress.subscribe(res => this.nearestAddress = res);
    const subWithin = this.mapService.withinMunicipality.subscribe(res => this.withinMunicipality = res);
  }

  // ngOnDestroy(): void {
  //   this.subAddr.unsubscribe();
  //   this.subWithin.unsubscribe();
  // }

  selectionChange(e: StepperSelectionEvent): void {
    if (e.selectedIndex !== 0) {
      this.showMap = false;
    } else {
      this.showMap = true;
      setTimeout(() => {
        this.mapService.mapGl.resize();
      }, 200);
    }
  }

  animationDone(e: StepperSelectionEvent): void {
    if (e.selectedIndex === 0) {
      // this.showMap = true;
      // setTimeout(() => {
      //   this.mapService.mapGl.resize();
      // }, 200);
    }
  }

  next(stepper: MatStepper): void {
    stepper.next();
  }

  onFileChanged(): void {
    console.log('image ready for upload');
  }

}
