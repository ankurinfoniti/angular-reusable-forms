import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FieldConfig } from '../models/types';

@Component({
  selector: 'app-ultimate-form',
  imports: [FormsModule],
  templateUrl: './ultimate-form.component.html',
  styleUrl: './ultimate-form.component.css',
})
export class UltimateFormComponent implements OnInit {
  fieldConfigs: FieldConfig[] = [];
  fieldValues: any = {};

  @Input({ required: true })
  set fields(newFields: (FieldConfig | string)[]) {
    this.fieldConfigs = newFields.map((field) => {
      if (typeof field === 'string') {
        return { name: field, displayName: field };
      } else {
        return field;
      }
    });

    for (let field of this.fieldConfigs) {
      this.fieldValues[field.name] = this.fieldValues[field.name] || '';
    }
  }

  ngOnInit() {}

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  submitForm() {
    console.log(this.fieldValues);
  }
}
