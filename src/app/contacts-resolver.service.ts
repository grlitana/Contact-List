import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HTTPService } from './http.service';
import { Contact } from './user-list/contacts.model';
import { UserListService } from './user-list/user-list.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsResolverService implements Resolve<Contact[]>{
  constructor(private HTTPService:HTTPService,
              private userListService: UserListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const contacts=this.userListService.getContacts()

    if(contacts.length===0){
      return this.HTTPService.fetchContacts()
    }else{
      return contacts
    }
  }
}
