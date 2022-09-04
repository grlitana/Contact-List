import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private httpService: HTTPService) { }

  ngOnInit(){
    this.httpService.fetchContacts().subscribe()
  }

}
