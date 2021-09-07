import { Routes } from "@angular/router";
import { CommandDetailsComponent } from "./command-details/command-details.component";
import { CommandsListComponent } from "./commands-list/commands-list.component";
import { PlatformExistsService } from "./shared/services/routeServices/platform-exists.service";


export const appRoutes:Routes = [
    {path: 'commands', component: CommandsListComponent},
    {path: 'commands/:id', component: CommandDetailsComponent, canActivate: [PlatformExistsService]},//This uses a service as a route guard. EventRouteActivatorService returns true if the event with the given id exists.
    {path: '', redirectTo: '/commands', pathMatch: 'full'}//Default route
]

//Notes.
//Before resolving this route, call EventsListResolverService. 
//When this service finishes and returns data, add this data to a property called events on the route.
//This events property can now be picked out of the route in the component that uses the route, in this case the eventsList component.