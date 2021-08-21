import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { CommandsListComponent } from './commands-list/commands-list.component';
import { PlatformsListComponent } from './platforms-list/platforms-list.component';
import { CommandDetailsComponent } from './command-details/command-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateCommandComponent } from './create-command/create-command.component';
import { CreatePlatformComponent } from './create-platform/create-platform.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CommandsListComponent,
    PlatformsListComponent,
    CommandDetailsComponent,
    NavbarComponent,
    CreateCommandComponent,
    CreatePlatformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
