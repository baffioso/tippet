import { Injectable } from '@angular/core';
import { Issue } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  ISSUES: Issue[] = [
    { category: 'Affald', description: 'bla bla bla', image: ['https://static1.squarespace.com/static/52c2df7ae4b0d215dded86fd/536fab69e4b00b0fd2515399/584cbe492e69cf27ac238169/1499478450297/eWP-59dw_400x400.jpg?format=1500w'], location: [12.576634, 55.678649], timestamp: new Date(), status: 'aktiv' },
    { category: 'Dyr', description: 'bla bla bla', image: ['https://static1.squarespace.com/static/52c2df7ae4b0d215dded86fd/536fab69e4b00b0fd2515399/584cbe492e69cf27ac238169/1499478450297/eWP-59dw_400x400.jpg?format=1500w'], location: [12.576634, 55.678649], timestamp: new Date(), status: 'aktiv' },
    { category: 'Skilte', description: 'bla bla bla', image: ['https://static1.squarespace.com/static/52c2df7ae4b0d215dded86fd/536fab69e4b00b0fd2515399/584cbe492e69cf27ac238169/1499478450297/eWP-59dw_400x400.jpg?format=1500w'], location: [12.576634, 55.678649], timestamp: new Date(), status: 'aktiv' },
    { category: 'Fest', description: 'bla bla bla', image: ['https://static1.squarespace.com/static/52c2df7ae4b0d215dded86fd/536fab69e4b00b0fd2515399/584cbe492e69cf27ac238169/1499478450297/eWP-59dw_400x400.jpg?format=1500w'], location: [12.576634, 55.678649], timestamp: new Date(), status: 'aktiv' },
    { category: 'Antilope', description: 'bla bla bla', image: ['https://static1.squarespace.com/static/52c2df7ae4b0d215dded86fd/536fab69e4b00b0fd2515399/584cbe492e69cf27ac238169/1499478450297/eWP-59dw_400x400.jpg?format=1500w'], location: [12.576634, 55.678649], timestamp: new Date(), status: 'aktiv' },
    { category: 'Sussi og Leo', description: 'bla bla bla', image: ['https://static1.squarespace.com/static/52c2df7ae4b0d215dded86fd/536fab69e4b00b0fd2515399/584cbe492e69cf27ac238169/1499478450297/eWP-59dw_400x400.jpg?format=1500w'], location: [12.576634, 55.678649], timestamp: new Date(), status: 'aktiv' },
    { category: 'Dijkstra', description: 'bla bla bla', image: ['https://static1.squarespace.com/static/52c2df7ae4b0d215dded86fd/536fab69e4b00b0fd2515399/584cbe492e69cf27ac238169/1499478450297/eWP-59dw_400x400.jpg?format=1500w'], location: [12.576634, 55.678649], timestamp: new Date(), status: 'aktiv' },
  ];

  constructor() { }
}
