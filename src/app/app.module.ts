import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome.component';
import {UserService} from './model/user.service';
import {TwainComponent} from './twain.comonent';
import {TwainService} from './model/twain.service';

@NgModule({
  imports: [BrowserModule, TwainService],
  providers: [UserService],
  declarations: [AppComponent, WelcomeComponent, TwainComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
