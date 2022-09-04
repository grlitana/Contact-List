import { Injectable, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HTTPService } from '../http.service';
import { Contact } from './contacts.model';

// @Injectable({
//   providedIn: 'root'
// })
export class UserListService{
  contactsChanged = new Subject<Contact[]>();
  startedEditing = new Subject<number>();

  private contacts: Contact[]=[
    // new Contact('1', 'Gerome','Gerome', 'gerome',90909),
    // new Contact('1', 'Gerome','Gerome', 'gerome',90909),
    // new Contact('1', 'Gerome','Gerome', 'gerome',90909),

  ]

  setContacts(contacts: Contact[]){
    this.contacts=contacts //this overwrites the currently listed contacts
    this.contactsChanged.next(this.contacts.slice())//Subscribe to changes
  }

  getContacts(){
    return this.contacts.slice()
  }

  //Used to update contact
  getContact(index: number){
    return this.contacts[index]
  }

  updateContact(index:number, newContact:Contact){
    this.contacts[index]=newContact
    this.contactsChanged.next(this.contacts.slice())//To subscribe to changes
  }

  deleteContact(index:number){
    this.contacts.splice(index, 1) //SPLICE DELETES 1 ARRAY ELEMENT
    this.contactsChanged.next(this.contacts.slice());//To subscribe to changes
  }

  onContactAdded(contact: Contact){
    this.contacts.push(contact)
    this.contactsChanged.next(this.contacts.slice())//To subscribe to changes
  }

}
