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
    this.getPlatforms().subscribe(platforms => this.platforms = platforms); //This is now done in the EventsListResolverService
    //this.events = this.route.snapshot.data['events'];//Data for the events property is now taken from the route
  }

  getPlatforms(){
    return this.commandService.getPlatformsList();
  }

}
