import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { platform } from 'process';
import { Command } from '../models/Command';
import { Platform } from '../models/Platform';
import { CommanderService } from '../shared/services/commander.service';
import { Toastr, TOASTR_TOKEN } from '../shared/services/common/toastr.service';

@Component({
  selector: 'app-platform-details',
  templateUrl: './platform-details.component.html',
  styleUrls: ['./platform-details.component.css']
})
export class PlatformDetailsComponent implements OnInit {
  platform:Platform;
  addMode: boolean;
  constructor(private route: ActivatedRoute, private service: CommanderService,  private router: Router, @Inject(TOASTR_TOKEN) private toastr:Toastr) { }

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.platform = data['platform'];
      this.addMode = false;
      //console.log(this.platform);
    });
  }

  addCommand() {
    this.addMode = true;
  }

  //The only time we need to update an event, is when adding a new session to it.
  addNewCommand(command: Command) {
    //Create a new id for the new session. This will take the session id with the biggest value, from the sessions array.
    //const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    //Set the new session id to nextId plus 1 to make it unique.
    //session.id = nextId + 1;
    this.platform.commandLineList.push(command);
    this.service.updatePlatform(this.platform).subscribe();
    this.toastr.success('New command created');
    this.addMode = false;
    //this.router.navigate(['/platforms/']);
  }

  cancelAddNewCommand() {
    this.addMode = false;
  }
}