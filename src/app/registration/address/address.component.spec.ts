import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import {FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

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
      declarations: [AddressComponent],
      providers:[{provide: FormGroupDirective, useValue: formGroupDirective}],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AddressComponent);

    component = fixture.componentInstance;
    component.formGroupName = 'address';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
