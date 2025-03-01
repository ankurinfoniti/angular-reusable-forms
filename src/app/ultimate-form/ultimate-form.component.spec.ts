import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateFormComponent } from './ultimate-form.component';

describe('UltimateFormComponent', () => {
  let component: UltimateFormComponent;
  let fixture: ComponentFixture<UltimateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
