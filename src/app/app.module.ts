import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule } from '@angular/common/http'; //TAKE NOTE TO COPY!

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HTTPService } from './http.service';
import { UserListService } from './user-list/user-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserFormComponent,
    UserListComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
