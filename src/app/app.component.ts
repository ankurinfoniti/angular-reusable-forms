import { Component } from '@angular/core';

import { UltimateFormComponent } from './ultimate-form/ultimate-form.component';
import {
  createMinLengthValidator,
  createMinValueValidator,
  createRegexValidator,
  dateRegex,
  emailRegex,
  isNotEmptyValidator,
  timeRegex,
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
      validators: [
        isNotEmptyValidator,
        createRegexValidator(emailRegex, 'email address'),
      ],
    },
    {
      name: 'age',
      type: 'number',
      validators: [isNotEmptyValidator, createMinValueValidator(21)],
    },
    {
      name: 'birthday',
      hint: '01/01/1990',
      validators: [
        isNotEmptyValidator,
        createRegexValidator(dateRegex, 'date in the format MM/DD/YYYY'),
      ],
    },
    {
      name: 'favoriteTimeOfDay',
      displayName: 'Favorite Time Of Day',
      hint: '12:34',
      validators: [
        isNotEmptyValidator,
        createRegexValidator(timeRegex, '24-hour time in the format HH:MM'),
      ],
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

  handleFormSubmission(formData: any) {
    console.log(formData);
  }
}
