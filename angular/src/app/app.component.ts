import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'giv-et-praj';
  selectedView: 'report-issue' | 'issue-list' = 'report-issue';

  selectView(name: any): void {
    this.selectedView = name;
  }
}
