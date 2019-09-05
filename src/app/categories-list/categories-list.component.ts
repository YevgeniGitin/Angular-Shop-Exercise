import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { Category } from '../../modules/category';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Categories-list',
  templateUrl: './Categories-list.component.html',
  styleUrls: ['./Categories-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate('1s'))
    ])
  ]
})
export class CategoriesListComponent implements OnInit {
  data: Category[];
  constructor(private dataService: DataService,private router: Router) {}
  //get category's products
  getCategoriesProducts(category: Category) {
    this.router.navigate(['products-list',category.id]);
  }
  //get all products
  getAllProducts() {
    this.router.navigate(['products-list','allProducts']);
  }
  //init firs data to present
  ngOnInit() {
    this.data = this.dataService.loadCategories();
  }
}
