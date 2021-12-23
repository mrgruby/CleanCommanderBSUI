import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '../models/Platform';

@Component({
  selector: 'platform-thumbnail',
  templateUrl: './platform-thumbnail.component.html',
  styleUrls: ['./platform-thumbnail.component.css']
})
export class PlatformThumbnailComponent implements OnInit {

  constructor() { }
  @Input()platform:Platform;
  text1: string;
  text2: string;
  

  ngOnInit(): void {
    if(this.platform.commandLineList.length === 1){
      this.text1 = 'There is';
      this.text2 = 'command';
    }
    else if(this.platform.commandLineList.length > 1){
      this.text1 = 'There are';
      this.text2 = 'commands';
    }
  }

}
