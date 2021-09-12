import { Routes } from "@angular/router";
import { CommandsListComponent } from "./commands-list/commands-list.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PlatformDetailsComponent } from "./platform-details/platform-details.component";
import { PlatformsListComponent } from "./platforms-list/platforms-list.component";
import { PlatformExistsService } from "./shared/services/routeServices/platform-exists.service";


export const appRoutes:Routes = [
    {path: 'platforms', component: PlatformsListComponent},
    {path: 'platforms/:id', component: PlatformDetailsComponent, canActivate: [PlatformExistsService]},//This uses a service as a route guard. EventRouteActivatorService returns true if the event with the given id exists.
    {path: '404', component: NotFoundComponent},
    {path: '', redirectTo: '/platforms', pathMatch: 'full'}//Default route
]

//Notes.
//Before resolving this route, call EventsListResolverService. 
//When this service finishes and returns data, add this data to a property called events on the route.
//This events property can now be picked out of the route in the component that uses the route, in this case the eventsList component.