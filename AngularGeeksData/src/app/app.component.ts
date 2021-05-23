import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularGeeksData';
  formstate = 'show';

  toggleForm(type)
  {
    type == 'login' ? this.formstate = 'show' : this.formstate = 'hide';
  }
}
