import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LocalizationService } from '../localization.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private userService: UserService,
    private router: Router,
    private localizationService: LocalizationService
  ) {}
  count: number = this.cartService.getCount();
  //when loged out clear the local storage
  logOut() {
    this.userService.logout();
    this.router.navigate(['/logIn']);
  }
  ngOnInit() {}
}
