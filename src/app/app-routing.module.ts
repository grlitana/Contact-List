import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactsResolverService } from './contacts-resolver.service';

const routes: Routes = [
  { path: 'Contact-List', redirectTo: 'Contact-List/contacts', pathMatch: 'full'},
  { path: 'Contact-List/contacts', component: UserListComponent, children:[
    // { path: '', component: UserListComponent},
    // { path: ':id', component: UserDetailsComponent, resolve: [ContactsResolverService]}, // we used :id as a dynamic parameter
  ]},
  { path: 'Contact-List/contacts/:id', component: UserDetailsComponent, resolve: [ContactsResolverService]}, // we used :id as a dynamic parameter
  { path: '**', component: PageNotFoundComponent },
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
