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
    'age',
    {
      name: 'bio',
      displayName: 'Write a short biography',
    },
    {
      name: 'favoriteColor',
      displayName: 'Favorite Color',
    },
  ];
}
