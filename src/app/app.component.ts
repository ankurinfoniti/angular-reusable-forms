import { Component } from '@angular/core';

import { UltimateFormComponent } from './ultimate-form/ultimate-form.component';
import {
  createMinLengthValidator,
  createMinValueValidator,
  isEmailValidator,
  isNotEmptyValidator,
} from './validators';

@Component({
  selector: 'app-root',
  imports: [UltimateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  formFields = [
    {
      name: 'name',
      validators: [isNotEmptyValidator, createMinLengthValidator(2)],
    },
    {
      name: 'email',
      validators: [isNotEmptyValidator, isEmailValidator],
    },
    {
      name: 'age',
      type: 'number',
      validators: [isNotEmptyValidator, createMinValueValidator(21)],
    },
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

  handleFormSubmission({ name, age, password, bio, favoriteColor }: any) {
    console.log({ name, age, password, bio, favoriteColor });
  }
}
