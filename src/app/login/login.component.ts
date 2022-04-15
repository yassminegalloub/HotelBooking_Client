import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { faUser, faUserCircle} from '@fortawesome/free-solid-svg-icons';

import { faLock } from '@fortawesome/free-solid-svg-icons';
import  Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faLock= faLock ;
  faUserCircle =faUserCircle;
  faUser =faUser ;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private _router: any;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService ,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
       // this.reloadPage();
       if(this.tokenStorage.getUser().roles=="ROLE_ADMIN"  ){
        this.router.navigate(['dashboard']);
       }else if(this.tokenStorage.getUser().roles=="ROLE_RECEPTION"  )
       {
        this.router.navigate(['reception']);
       }
      else 
      this.router.navigate(['home']);
   
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  
  }

  reloadPage(): void {
    window.location.reload();
  }

}
