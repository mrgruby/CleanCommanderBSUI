import { Component, OnInit } from '@angular/core';
import { Platform } from '../models/Platform';
import { CommanderService } from '../shared/services/commander.service';

@Component({
  selector: 'app-platforms-list',
  templateUrl: './platforms-list.component.html',
  styleUrls: ['./platforms-list.component.css']
})
export class PlatformsListComponent implements OnInit {

  constructor(private commandService:CommanderService) { }

  platforms:Platform[];
  
  ngOnInit(): void {
  }

}
