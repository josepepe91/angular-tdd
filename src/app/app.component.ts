import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><br><app-welcome></app-welcome>`,
})
export class AppComponent {
  name = 'Angular';
}
