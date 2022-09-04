import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Contact } from '../user-list/contacts.model';
import { UserListService } from '../user-list/user-list.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {

  constructor(private userListService:UserListService) { }

  @ViewChild ('f', {static:false}) form:NgForm //To view the form
  @Output() createMode = new EventEmitter<boolean>()
  // @Input() editMode

  //Variables for updating contacts
  editMode=false
  editedItemIndex: number
  editedItem: Contact
  subscription:Subscription //Subscribe to changes

  ngOnInit(){

    //Updating Contact
    this.subscription=this.userListService.startedEditing
    .subscribe(
      (index:number)=>{
          this.editMode=true
          this.editedItemIndex=index
          this.editedItem=this.userListService.getContact(index)
          this.form.setValue({
            id: this.editedItem.id,
            name: this.editedItem.name,
            username: this.editedItem.username,
            email: this.editedItem.email,
            phone: this.editedItem.phone,
          })
        }
      )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()//To prevent data leak?
  }

  onClear(){
    this.form.reset()
  }

  onCancel(){
    this.createMode.emit();
  }

  onSubmit(form:NgForm){
    const newContact = new Contact(form.value.id,form.value.name, form.value.username, form.value.email, form.value.phone)

    if(this.editMode===true){
      this.userListService.updateContact(this.editedItemIndex,newContact)//updates the item
    }else{
      this.userListService.onContactAdded(newContact)
    }
    form.reset()
    this.editMode=false
  }

}
