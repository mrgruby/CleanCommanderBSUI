import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { CommanderService } from '../services/commander.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformsListResolver implements Resolve<any> {

  constructor(private service:CommanderService){}

  resolve() {
    return this.service.getPlatformsList();
  }
}
