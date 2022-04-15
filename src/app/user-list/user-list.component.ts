
import  Swal  from 'sweetalert2';
import { AuthService } from './../_services/auth.service';
import { UserService } from './../_services/user.service';
import { User } from './../User';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { faEye, faEyeDropper, faPencilAlt, faPenSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
//import { Role } from '../Role';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users: Observable<User[]>;
//roles: Observable<Role[]>;
//roles = [
 
//  { id: 2, name: "ROLE_AGENT" },
//  { id: 3, name: "ROLE_RECEPTION" }
//];
//users: User[] = [];
 faPlus= faPlus ;
 faTrash=faTrash ;
 faPencilAlt=faPencilAlt;
 faEye=faEye;
p: number = 1;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
   
    this.reloadData();
    
  }
  reloadData() {
    this.users= this.authService.getUser();
    
    
    

  }
  deleteUser(id: number) {
    this.authService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User deleted successfuly',
          showConfirmButton:false,
          timer: 5000
        })
  }

  detailsUser(id: number){
    this.router.navigate(['details', id]);
  }

  updateUser(id: number){
    this.router.navigate(['updateUser', id]);
  }

  
}
