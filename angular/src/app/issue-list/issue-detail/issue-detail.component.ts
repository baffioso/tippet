import { Component, Input, OnInit } from '@angular/core';
import { Issue } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {
  @Input() issue: Issue;

  constructor() { }

  ngOnInit(): void {
  }

}
