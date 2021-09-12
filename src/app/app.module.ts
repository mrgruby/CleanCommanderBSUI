import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { CommandsListComponent } from './commands-list/commands-list.component';
import { PlatformsListComponent } from './platforms-list/platforms-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateCommandComponent } from './create-command/create-command.component';
import { CreatePlatformComponent } from './create-platform/create-platform.component';
import { RouterModule } from '@angular/router';
import { PlatformThumbnailComponent } from './platform-thumbnail/platform-thumbnail.component';
import { CommanderService } from './shared/services/commander.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformDetailsComponent } from './platform-details/platform-details.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandsListComponent,
    PlatformsListComponent,
    NavbarComponent,
    CreateCommandComponent,
    CreatePlatformComponent,
    PlatformThumbnailComponent,
    PlatformDetailsComponent,
    NotFoundComponent
    
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
