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
    { name: 'name', validationFns: [isNotEmpty, isTwoCharsOrLonger] },
    { name: 'age', type: 'number', validationFns: [isNotEmpty, is21OrOver] },
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
