import { Component, Input, OnInit } from '@angular/core';
import { Command } from 'selenium-webdriver';

@Component({
  selector: 'commands-list',
  templateUrl: './commands-list.component.html',
  styleUrls: ['./commands-list.component.css']
})
export class CommandsListComponent implements OnInit {
  @Input() commands: Command[];
  constructor() { }

  ngOnInit(): void {
  }

}
