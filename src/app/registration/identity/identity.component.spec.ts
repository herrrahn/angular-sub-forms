import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityComponent } from './identity.component';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('IdentityComponent', () => {
  let component: IdentityComponent;
  let fixture: ComponentFixture<IdentityComponent>;

  beforeEach(() => {

    const rootForm = new FormGroup({
      basicInfo: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl(''),
        email: new FormControl(''),
        age: new FormControl('')
      }),
      address: new FormGroup({
        street: new FormControl(''),
        number: new FormControl(''),
        postal: new FormControl(''),
        company: new FormControl('')
      })
    });

    const formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = rootForm;

    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, NoopAnimationsModule],
      declarations: [IdentityComponent],
      providers:[{provide: FormGroupDirective, useValue: formGroupDirective}]
    });
    fixture = TestBed.createComponent(IdentityComponent);

    component = fixture.componentInstance;
    component.formGroupName = 'basicInfo';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show red border when form is invalid', () => {
    fixture.componentInstance.form.get('firstName')?.setValue('');
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.invalid'));
    expect(element).toBeTruthy();
  })

  it('should not show red border when form is valid', () => {
    fixture.componentInstance.form.get('firstName')?.setValue('RRR');
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.invalid'));
    expect(element).toBeFalsy();
  })
});
