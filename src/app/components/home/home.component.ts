import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: Observable<string>;
  constructor(private userService: UserService) {
    this.name=this.userService.loadName();
  }
  ngOnInit() {}
}
