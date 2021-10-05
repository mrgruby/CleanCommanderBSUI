import { Component, OnInit } from '@angular/core';
import { Command } from '../models/Command';
import { CommanderService } from '../shared/services/commander.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:CommanderService) { }

  searchTerm:string="";
  foundCommands:Command[];
  ngOnInit(): void {
  }
  searchCommands(searchTerm){
    this.service.searchCommands(searchTerm).subscribe(data => {
      this.foundCommands = data;
    })
  }
}
