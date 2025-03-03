import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FieldConfig, Validator } from '../models/types';

const defaultFieldConfigValues = {
  type: 'text',
  hint: '',
  validators: <Validator[]>[],
};

@Component({
  selector: 'app-ultimate-form',
  imports: [FormsModule],
  templateUrl: './ultimate-form.component.html',
  styleUrl: './ultimate-form.component.css',
})
export class UltimateFormComponent implements OnInit {
  validationErrors: string[] = [];
  fieldConfigs: FieldConfig[] = [];
  fieldValues: any = {};

  @Input({ required: true })
  set fields(newFields: (FieldConfig | string)[]) {
    this.fieldConfigs = newFields.map((field) => {
      if (typeof field === 'string') {
        return { ...defaultFieldConfigValues, name: field, displayName: field };
      } else {
        return {
          ...defaultFieldConfigValues,
          displayName: field.name,
          ...field,
        };
      }
    });

    for (let field of this.fieldConfigs) {
      this.fieldValues[field.name] = this.fieldValues[field.name] || '';
    }
  }

  @Output() submit = new EventEmitter<any>();

  ngOnInit() {}

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  submitForm() {
    this.validationErrors = [];

    for (let field of this.fieldConfigs) {
      for (let validator of field.validators!) {
        const isValid = validator.checkFn(this.fieldValues[field.name]);

        if (!isValid) {
          this.validationErrors.push(
            `${field.displayName}: ${validator.errorMessage}`,
          );
          break;
        }
      }
    }

    if (this.validationErrors.length > 0) {
      return;
    }

    this.submit.emit(this.fieldValues);
  }
}
