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
import { PlatformThumbnailComponent } from './platform-thumbnail/platform-thumbnail.component';
import { CommanderService } from './shared/services/commander.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CommandsListComponent,
    PlatformsListComponent,
    CommandDetailsComponent,
    NavbarComponent,
    CreateCommandComponent,
    CreatePlatformComponent,
    PlatformThumbnailComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CommanderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
