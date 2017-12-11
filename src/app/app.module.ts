import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome.component';
import {UserService} from './model/user.service';

@NgModule({
  imports: [BrowserModule],
  providers: [UserService],
  declarations: [AppComponent, WelcomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
