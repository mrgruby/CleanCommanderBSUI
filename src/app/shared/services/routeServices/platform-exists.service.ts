import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommanderService } from '../commander.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformExistsService implements CanActivate {

  constructor(private commandService:CommanderService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const commandExists = !!this.commandService.getPlatformById(route.params['id'])//Check if the event with the given id exists.
    //!! casts to boolean. + casts to a number, needs to be done since the route.params['id'] is a string

    //If the event does not exist, redirect to an error page.
    if (!commandExists)
      this.router.navigate(['/404']);

    //If the event does exist, return true so that the route can be acessed
    return commandExists;
  }
}
