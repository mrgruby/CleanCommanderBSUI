import { Component, OnInit } from '@angular/core';
import { Platform } from '../models/Platform';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  searchTerm:string="";
  foundPlatforms:Platform[];
  ngOnInit(): void {
  }
  searchPlatforms(searchTerm){

  }
}
