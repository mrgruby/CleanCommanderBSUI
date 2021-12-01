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
import { CollapsibleWellComponent } from './commands-list/collapsible-well.component';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { Toastr, TOASTR_TOKEN } from './shared/services/common/toastr.service';
import { JQ_TOKEN } from './shared/services/common/jquery.service';
import { ModalTriggerDirective } from './shared/directives/modal-trigger.directive';
import { ClipboardModule } from 'ngx-clipboard';
import { LoginComponent } from './user/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

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
    NotFoundComponent,
    CollapsibleWellComponent,
    SearchModalComponent,
    ModalTriggerDirective,
    //LoginComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ClipboardModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['https://localhost:44363/'],
        disallowedRoutes:[]
      }
    })
  ],
  providers: [
    CommanderService,
    {
      provide: TOASTR_TOKEN, 
      useValue: toastr
    },
    {
      provide: JQ_TOKEN, 
      useValue: jQuery
    },
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
