import { Component, Injectable, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { HTTPService } from '../http.service';
import { Contact } from './contacts.model';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  contacts: Contact[]
  createMode=false;

  private subscription:Subscription //Subscribe to changes

  constructor(private HTTPService: HTTPService, private userListService: UserListService){}

  ngOnInit(){
    // this.HTTPService.fetchContacts().subscribe()
    this.contacts=this.userListService.getContacts()

    //Subscription for reading contacts from database
    this.subscription = this.userListService.contactsChanged
    .subscribe(
      (contacts:Contact[])=>{
        this.contacts=contacts
      }
      )
    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }//REQUIRED!!

  onAddContact(){
      this.createMode=true;
  }

  onCancel(){
    this.createMode=false;
  }

  //View, Update, Delete
  onDelete(index:number){
    if(confirm("Are you sure you want to delete this contact?")) {
      console.log(this.userListService.deleteContact(index));
    }
    this.userListService.contactsChanged.subscribe()
  }

  onUpdate(index:number){
    this.createMode=true;
    this.userListService.startedEditing.next(index)
  }
}
