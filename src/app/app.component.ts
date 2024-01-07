import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ReusableFormComponent } from './reusable-form/reusable-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReusableFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  formFields = [
    'name',
    { name: 'age', type: 'number' },
    { name: 'password', type: 'password', hint: 'Enter a password' },
    {
      name: 'bio',
      displayName: 'Write a short biography',
      hint: 'i.e I like to code',
    },
    {
      name: 'favoriteColor',
      displayName: 'Favorite Color',
    },
  ];
}
