import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BoardReceptionComponent } from './board-reception/board-reception.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OffresComponent } from './offres/offres.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AdminGuard } from './admin.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ReservationAdminComponent } from './reservation-admin/reservation-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: BoardAdminComponent },
  { path: 'reception', component: BoardReceptionComponent },
 // { path: 'admin', component: BoardAdminComponent },
  { path: 'userList', component: UserListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'details/:id' , component: DetailUserComponent},
  { path: 'addUser', component : AddUserComponent},
  { path: 'updateUser/:id', component: UpdateUserComponent},
   {path:'forbidden' ,component: ForbiddenComponent},
   { path: 'accomodation', component: AccomodationComponent},
   { path: 'restaurant', component: RestaurantComponent},
   { path: 'offres', component: OffresComponent},
   { path: 'contacts', component: ContactsComponent},
   { path: 'forgot-password', component: ForgotPasswordComponent},
   { path: 'reservationAdmin', component: ReservationAdminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
