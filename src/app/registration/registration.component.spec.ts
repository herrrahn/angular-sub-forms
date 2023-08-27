import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import {By} from '@angular/platform-browser';
import {IdentityComponent} from './identity/identity.component';
import {AddressComponent} from './address/address.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, NoopAnimationsModule],
      declarations: [RegistrationComponent] //, IdentityComponent, AddressComponent]
    });
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('submit button should be inactive when form is invalid', () => {
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('#btn-submit')).nativeElement as HTMLButtonElement;
    expect(btn.disabled).toBeTrue();
  });

  it ('submit button should be enabled when form is valid', () => {
    fixture.componentInstance.userForm.get('basicInfo')?.get('firstName')?.setValue("RRR");
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('#btn-submit')).nativeElement as HTMLButtonElement;
    expect(btn.disabled).toBeFalse();
  });
});
