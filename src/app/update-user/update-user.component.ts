import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  faLock= faLock;
  faEnvelope=faEnvelope;
  faUser=faUser;

id: number;
user: User;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.user= new User();
    this.id= this.route.snapshot.params['id'];
    this.authService.detailsUser(this.id).subscribe(data=>{
      console.log(data)
      this.user= data;
    }, error => console.log(error));
  }
  updateUser() {
    this.authService.updateUser(this.id, this.user).subscribe(data =>{
      console.log(data);
      this.user = new User();
      this.gotoList();
    }, error =>console.log(error));
  }
  onSubmit() {
    this.updateUser();  
    this.reloadPage();  
  }
  reloadPage(): void {
    window.location.reload();
  }

  gotoList() {
    this.router.navigate(['/userList']);
  }
}
