import { Component, OnInit } from '@angular/core';
import { IssueService } from './issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  issues: any;

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.issues = this.issueService.ISSUES;
  }

}
