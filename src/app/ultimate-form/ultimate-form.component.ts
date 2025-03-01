import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ultimate-form',
  imports: [FormsModule],
  templateUrl: './ultimate-form.component.html',
  styleUrl: './ultimate-form.component.css',
})
export class UltimateFormComponent implements OnInit {
  @Input({ required: true }) fields!: string[];

  fieldValues: any = {};

  ngOnInit() {
    for (let field of this.fields) {
      this.fieldValues[field] = '';
    }
  }

  submitForm() {
    console.log(this.fieldValues);
  }
}
