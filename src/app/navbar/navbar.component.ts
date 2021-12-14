import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Command } from '../models/Command';
import { AuthService } from '../shared/services/auth.service';
import { CommanderService } from '../shared/services/commander.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private service:CommanderService, private router: Router) { }

  searchTerm:string="";
  foundCommands:Command[];
  ngOnInit(): void {
  }
  searchCommands(searchTerm){
    this.service.searchCommands(searchTerm).subscribe(data => {
      this.foundCommands = data;
    })
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['platforms']);
  }
}
