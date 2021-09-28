import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '../models/Platform';

@Component({
  selector: 'app-platform-details',
  templateUrl: './platform-details.component.html',
  styleUrls: ['./platform-details.component.css']
})
export class PlatformDetailsComponent implements OnInit {
  platform:Platform;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.platform = data['platform'];
    });
  }

}
