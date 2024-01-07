import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldConfig } from '../types';

const defaultFieldConfigValues = {
  type: 'text',
  hint: '',
};

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
        return {
          ...defaultFieldConfigValues,
          name: field,
          displayName: field,
        };
      } else {
        return {
          ...defaultFieldConfigValues,
          displayName: field.name,
          ...field,
        };
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
