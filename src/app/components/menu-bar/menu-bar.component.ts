import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { LocalizationService } from '../../services/localization.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  constructor(private cartService: CartService, private userService: UserService, private router: Router, private localizationService: LocalizationService) {}
  count:Observable<number>;
  language:string="EN";
  sub: Subscription;
  //when loged out clear the local storage
  logOut() {
    this.userService.logout();
    this.router.navigate(['/logIn']);
  }
  ngOnInit() {
    this.sub=this.localizationService.selectedLanguage.subscribe(ln=>this.language=ln);
    this.count= this.cartService.getCount();
  }
}
