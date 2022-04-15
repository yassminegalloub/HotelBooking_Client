import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';


import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UserListComponent } from './user-list/user-list.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { OffresComponent } from './offres/offres.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BoardReceptionComponent } from './board-reception/board-reception.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReservationAdminComponent } from './reservation-admin/reservation-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    UserListComponent,
    DetailUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    NavbarComponent,
    ForbiddenComponent,
    AccomodationComponent,
    OffresComponent,
    RestaurantComponent,
    ContactsComponent,
    BoardReceptionComponent,
    ForgotPasswordComponent,
    ReservationAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
