import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommanderService } from '../services/commander.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformResolver implements Resolve<any> {
  constructor(private service:CommanderService){}

  resolve(route:ActivatedRouteSnapshot) {
    return this.service.getPlatformById(route.params['id']);
  }
}
