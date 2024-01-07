import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldConfig } from '../types';

@Component({
  selector: 'app-reusable-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reusable-form.component.html',
  styleUrl: './reusable-form.component.css',
})
export class ReusableFormComponent implements OnInit {
  fieldValues: any = {};
  fieldConfigs: FieldConfig[] = [];

  @Input({ required: true })
  set fields(newFields: (FieldConfig | string)[]) {
    this.fieldConfigs = newFields.map((field) => {
      if (typeof field === 'string') {
        return { name: field, displayName: field };
      } else {
        return field;
      }
    });

    for (const field of this.fieldConfigs) {
      this.fieldValues[field.name] = '';
    }
  }

  ngOnInit() {}

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  submitForm() {
    alert(
      Object.entries(this.fieldValues)
        .map((entry) => `${entry[0]}: ${entry[1]}`)
        .join('\n')
    );
  }
}
