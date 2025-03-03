import { Component } from '@angular/core';

import { UltimateFormComponent } from './ultimate-form/ultimate-form.component';

const isNotEmpty = (str: string) => str.length !== 0;
const isTwoCharsOrLonger = (str: string) => str.length >= 2;
const is21OrOver = (value: number) => value >= 21;
const isTenCharsOrLonger = (str: string) => str.length >= 10;

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
      validators: [
        { checkFn: isNotEmpty, errorMessage: 'Please enter a value' },
        {
          checkFn: isTwoCharsOrLonger,
          errorMessage: 'Must be 2 characters or longer',
        },
      ],
    },
    {
      name: 'age',
      type: 'number',
      validators: [
        { checkFn: isNotEmpty, errorMessage: 'Please enter a value' },
        {
          checkFn: is21OrOver,
          errorMessage: 'Age must be 21 or over',
        },
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

  handleFormSubmission({ name, age, password, bio, favoriteColor }: any) {
    console.log({ name, age, password, bio, favoriteColor });
  }
}
