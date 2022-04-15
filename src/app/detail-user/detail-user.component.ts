import { UserListComponent } from './../user-list/user-list.component';
import { AuthService } from './../_services/auth.service';
import { User } from './../User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  
id: number ;
user: User ;
  constructor(private route: ActivatedRoute, private router: Router,
    private authService: AuthService ) { }

  ngOnInit(): void {
    this.user= new User();
    this.id= this.route.snapshot.params['id'];

    this.authService.detailsUser(this.id).subscribe(data=>{
      console.log(data)
      this.user= data ;
    }, error =>console.log(error));
  }
  list(){
    this.router.navigate(['userList'])
  }

}
