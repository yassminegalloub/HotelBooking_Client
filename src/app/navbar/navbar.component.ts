import { TokenStorageService } from './../_services/token-storage.service';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';

import { faAdjust} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHome= faHome ;
  faSignOutAlt= faSignOutAlt ;
  faUserPlus=faUserPlus;
  faUserCircle =faUser;
  faUser=faUser ;
  faAdjust=faAdjust ;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showReceptionBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showReceptionBoard = this.roles.includes('ROLE_RECEPTION');

      this.username = user.username;
  }
}
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
