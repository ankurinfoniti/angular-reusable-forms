import { Component } from '@angular/core';
import { UltimateFormComponent } from './ultimate-form/ultimate-form.component';

@Component({
  selector: 'app-root',
  imports: [UltimateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  formFields = [
    'name',
    { name: 'age', type: 'number' },
    {
      name: 'password',
      type: 'password',
      hint: 'Must have at least 8 characters',
    },
    {
      name: 'bio',
      displayName: 'Write a short biography',
      hint: 'i.e I like food',
    },
    {
      name: 'favoriteColor',
      displayName: 'Favorite Color',
    },
  ];
}
