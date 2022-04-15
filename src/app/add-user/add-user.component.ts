import { Role } from './../Role';
import { Observable } from 'rxjs';
import { faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { User } from './../User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  roles: Observable<Role[]>;
  faLock= faLock;
  faEnvelope=faEnvelope;
  faUser=faUser;

user: User= new User();
submitted= false ;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.roles= this.authService.getRole();
  }
newUser():void{
  this.submitted= false;
  this.user= new User();
}
save() {
  this.authService
  .createUser(this.user).subscribe(data => {
    console.log(data)
    this.user = new User();
    this.gotoList();
  }, 
  error => console.log(error));
}

onSubmit() {
  this.submitted = true;
  this.save();    
}

gotoList() {
  this.router.navigate(['/userList']);
}
}