import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Command } from '../models/Command';
import { Platform } from '../models/Platform';
import { CommanderService } from '../shared/services/commander.service';
import { Toastr, TOASTR_TOKEN } from '../shared/services/common/toastr.service';

@Component({
  selector: 'commands-list',
  templateUrl: './commands-list.component.html',
  styleUrls: ['./commands-list.component.css']
})
export class CommandsListComponent implements OnInit {
  @Input() commands: Command[];
  platform: Platform;

  constructor(private route: ActivatedRoute, private service: CommanderService, @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit(): void {
    //Get access to the current Platform, so that we can do things with the commands that belong to it.
    this.route.data.forEach((data) => {
      this.platform = data['platform'];
    });
  }

  deleteCommand(command: Command) {
    if (confirm("Are you sure to delete " + command.howTo)) {
      //Remove the command from the current platforms list, so that it is removed from the list on the page right away.
      this.platform.commandLineList.forEach((value, index) => {
        if (value.commandLineId == command.commandLineId) this.platform.commandLineList.splice(index, 1);
        //Then delete it from the server.
        this.service.deleteCommand(command);
      });
      this.toastr.success('Command deleted!');
    }
  }
}
//this.service.updatePlatform(this.platform).subscribe();