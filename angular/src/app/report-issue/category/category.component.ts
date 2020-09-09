import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any;
  @Output() selected = new EventEmitter();

  constructor( private catService: CategoryService ) { }

  ngOnInit(): void {
    this.categories = this.catService.SWECO;
  }

  next(): void {
    this.selected.emit();
  }

}
