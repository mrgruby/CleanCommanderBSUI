import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { platform } from 'process';
import { Platform } from '../models/Platform';

@Component({
  selector: 'app-platform-details',
  templateUrl: './platform-details.component.html',
  styleUrls: ['./platform-details.component.css']
})
export class PlatformDetailsComponent implements OnInit {
  platform:Platform;
  addMode: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.platform = data['platform'];
      this.addMode = false;
      //console.log(this.platform);
    });
  }

}
