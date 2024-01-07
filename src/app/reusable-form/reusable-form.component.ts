import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reusable-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reusable-form.component.html',
  styleUrl: './reusable-form.component.css',
})
export class ReusableFormComponent implements OnInit {
  @Input({ required: true }) fields!: string[];
  fieldValues: any = {};

  ngOnInit() {
    for (const field of this.fields) {
      this.fieldValues[field] = '';
    }
  }

  submitForm() {
    alert(
      Object.entries(this.fieldValues)
        .map((entry) => `${entry[0]}: ${entry[1]}`)
        .join('\n')
    );
  }
}
