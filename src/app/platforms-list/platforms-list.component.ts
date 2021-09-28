import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '../models/Platform';
import { CommanderService } from '../shared/services/commander.service';

@Component({
  selector: 'app-platforms-list',
  templateUrl: './platforms-list.component.html',
  styleUrls: ['./platforms-list.component.css']
})
export class PlatformsListComponent implements OnInit {

  constructor(private commandService:CommanderService, private route: ActivatedRoute) { }

  platforms:Platform[];

  ngOnInit(): void {
    //this.getPlatforms().subscribe(platforms => this.platforms = platforms); //This is now done in the EventsListResolverService
    this.platforms = this.route.snapshot.data['platforms'];//Data for the events property is now taken from the route
  }

  getPlatforms(){
    return this.commandService.getPlatformsList();
  }

}
