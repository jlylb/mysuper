import { Component } from '@angular/core';

/**
 * Generated class for the AdminComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'admin',
  templateUrl: 'admin.html'
})
export class AdminComponent {

  text: string;

  constructor() {
    console.log('Hello AdminComponent Component');
    this.text = 'Hello World';
  }

}
