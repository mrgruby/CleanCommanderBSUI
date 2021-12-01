import { Routes } from "@angular/router";
import { CreatePlatformComponent } from "./create-platform/create-platform.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PlatformDetailsComponent } from "./platform-details/platform-details.component";
import { PlatformsListComponent } from "./platforms-list/platforms-list.component";
import { AuthGuard } from "./routeGuards/authGuard";
import { PlatformResolver } from "./shared/resolvers/platform.resolver";
import { PlatformsListResolver } from "./shared/resolvers/platforms-list.resolver";


export const appRoutes:Routes = [
    {path: 'platforms/new', component: CreatePlatformComponent},
    {path: 'platforms', component: PlatformsListComponent, resolve:{platforms:PlatformsListResolver}},
    {path: 'platforms/:id', component: PlatformDetailsComponent, resolve:{platform:PlatformResolver}},//This uses a service as a route guard. EventRouteActivatorService returns true if the event with the given id exists.
    {path: '404', component: NotFoundComponent},
    {path: '', redirectTo: '/platforms', pathMatch: 'full'},//Default route
    {
        path: 'user',
        loadChildren: ()=> import('./user/user.module').//This loads the user module with a function, when the path starts with 'user'. 
        then(m => m.UserModule)                         //So, this module is loaded only when the user accesses the user profile, which saves loading ressources in big apps
    }
]

//Notes.
//Before resolving this route, call EventsListResolverService. 
//When this service finishes and returns data, add this data to a property called events on the route.
//This events property can now be picked out of the route in the component that uses the route, in this case the eventsList component.