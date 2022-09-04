import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HTTPService } from '../http.service';
import { Contact } from '../user-list/contacts.model';
import { UserListService } from '../user-list/user-list.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  contact:Contact
  constructor(private userListService: UserListService,
              private route: ActivatedRoute,
              private HTTPService: HTTPService,) { }

  id:number

  ngOnInit() {
    // this.route.params
    // .subscribe((params:Params) => {
    //   this.id = +params['id'];
    //   this.contact=this.userListService.getContact(this.id)
    //   }
    // );

    this.id=+this.route.snapshot.paramMap.get('id')-1 //NOTE: -1 because id starts w/ 0
    this.contact=this.userListService.getContact(this.id)

  }

}
