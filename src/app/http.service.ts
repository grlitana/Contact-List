import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './user-list/contacts.model';
import { tap } from 'rxjs/operators'; //TAKE NOTE TO COPY
import { UserListService } from './user-list/user-list.service';

@Injectable({
  providedIn: 'root'
})

export class HTTPService {

  constructor(private http:HttpClient,
              private userListService: UserListService) { }

  fetchContacts(){
    return this.http
    .get<Contact[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      tap(contacts=>{
        this.userListService.setContacts(contacts)
      })
    )
  }
}
