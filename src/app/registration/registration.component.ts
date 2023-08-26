import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    // this.buildForm();
  }

  private buildForm2() {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: [''],
        lastName: [],
        email: [],
        age: []
      }),
      address: this.fb.group({
        street: [],
        number: [],
        postal: [],
        company: []
      })
    });
  }

  private buildForm() {
      this.userForm = new FormGroup({
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
  }

  submit() {
    console.log(this.userForm.value)
  }
}
