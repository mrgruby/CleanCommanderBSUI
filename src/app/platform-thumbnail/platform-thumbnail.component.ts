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

  ngOnInit(): void {
  }

}
