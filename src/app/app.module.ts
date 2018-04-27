import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';

import {routing} from './app.routing';
import { AppComponent } from './app.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { UserFormComponent } from './user-form/user-form.component';

import { UserService } from './shared/services/user.service';
import { UsersComponent } from './users/users.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    // UserProfileComponent,
    // UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // HttpClientModule
    routing
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
