import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UltimateFormComponent } from './ultimate-form/ultimate-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UltimateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
