import { Component, OnInit} from '@angular/core';
import{ trigger , state , style , animate , transition } from '@angular/animations';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[trigger('fadeInOut', [
    state('void', style({opacity: 0})),
    transition('void <=> *', animate('1.5s')),
  ])]
})
export class HomeComponent implements OnInit{
  name:string=this.userService.loadName();
  constructor(private userService:UserService) {}

  ngOnInit() { }

}
