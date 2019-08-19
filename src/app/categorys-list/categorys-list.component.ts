import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { trigger, state, style, animate, transition} from "@angular/animations";
import { Category } from "../../modules/category";
import { DataService } from "../data.service";

@Component({
  selector: "app-categorys-list",
  templateUrl: "./categorys-list.component.html",
  styleUrls: ["./categorys-list.component.css"],
  animations: [
    trigger("fadeInOut", [
      state("void", style({ opacity: 0 })),
      transition("void <=> *", animate("1s"))
    ])
  ]
})
export class CategorysListComponent implements OnInit {
  @Output() categorySelection = new EventEmitter<string>(); //out put the category's id

  data: Category[];
  constructor(private dataService: DataService) {}
  //get category's products
  getCategorysProducts(category: Category) {
    this.categorySelection.emit(category.id);
  }
  //get all products
  getAllProducts() {
    this.categorySelection.emit("allProducts");
  }
  //init firs data to present
  ngOnInit() {
    this.data = this.dataService.loadCategorys();
  }
}
