import { Component, OnInit } from '@angular/core';
import { Category } from '../../../core/models/category';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Categories-list',
  templateUrl: './Categories-list.component.html',
  styleUrls: ['./Categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  
  data: Observable<Category[]>;
  constructor(private dataService: DataService, private router: Router) {}
  //get category's products
  getCategoriesProducts(category: Category) {
    this.router.navigate(['products-list', category.id]);
  }
  //get all products
  getAllProducts() {
    this.router.navigate(['products-list', 'allProducts']);
  }
  //init firs data to present
  ngOnInit() {
    this.data = this.dataService.entries;
  }

}
