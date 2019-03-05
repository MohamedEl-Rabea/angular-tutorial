import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { forbiddenNameValidator } from '../customValidators';

@Component({
  selector: 'app-reactive-form-validation-logic-inside-component',
  templateUrl: './reactive-form-validation-logic-inside-component.component.html',
  styleUrls: ['./reactive-form-validation-logic-inside-component.component.scss']
})
export class ReactiveFormValidationLogicInsideComponentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  employeeForm;

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      fullName: ['', [Validators.required, forbiddenNameValidator(/bob/i)]],
      address: ['', Validators.required],
      contacts: this.formBuilder.group({
        phone: [''],
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required]],
        contactsPrefrences: ['email']
      }, { validators: confirmEmail }),
      gender: ['', Validators.required]
    });

    this.employeeForm.valueChanges.subscribe(data => {
      this.logFormValidationErrors();
    });

    this.employeeForm.get('contacts').get('contactsPrefrences').valueChanges.subscribe(data => {
      let phoneControl: AbstractControl = this.employeeForm.get('contacts').get('phone');
      let emailControl: AbstractControl = this.employeeForm.get('contacts').get('email');
      let confirmEmailControl: AbstractControl = this.employeeForm.get('contacts').get('confirmEmail');
      if (data === 'phone') {
        phoneControl.setValidators(Validators.required);
        emailControl.clearValidators();
        confirmEmailControl.clearValidators();
      } else {
        emailControl.setValidators([Validators.required, Validators.email]);
        confirmEmailControl.setValidators([Validators.required]);
        phoneControl.clearValidators();
      }
      emailControl.updateValueAndValidity();
      phoneControl.updateValueAndValidity();
      confirmEmailControl.updateValueAndValidity();
    });
  }

  fieldsValidationMessages = {
    fullName: {
      required: 'Full name is required',
      forbiddenName: 'This name is forbidden'
    },
    address: {
      required: 'Address is required'
    },
    phone: {
      required: 'Phone is required'
    },
    email: {
      required: 'Email is required',
      email: 'Email is invalid'
    },
    confirmEmail: {
      required: 'Confirm email is required',
    },
    contacts: {
      EmailMismatch: 'Email not match'
    },
    gender: {
      required: 'Gender is required'
    }
  }

  formErrors = {
    fullName: '',
    address: '',
    phone: '',
    email: '',
    confirmEmail: '',
    contacts: '',
    gender: ''
  }

  logFormValidationErrors(formGroupInstance = this.employeeForm) {
    Object.keys(formGroupInstance.controls).forEach(key => {
      let absctarctControl: AbstractControl = formGroupInstance.get(key);
      this.formErrors[key] = '';
      if (absctarctControl.errors && (absctarctControl.touched || absctarctControl.dirty)) {
        Object.keys(absctarctControl.errors).forEach(errorKey => {
          this.formErrors[key] = this.fieldsValidationMessages[key][errorKey];
        })
      }
      if (absctarctControl instanceof FormGroup) {
        this.logFormValidationErrors(absctarctControl);
      }
    })
  }

  handleSubmit() {
    console.log("Form error : ", this.formErrors);
  }
}

export function confirmEmail(group: AbstractControl): ValidationErrors | null {
  let email = group.get('email').value;
  let phone = group.get('confirmEmail').value;
  if (email && phone) {
    return group.get('email').value !== group.get('confirmEmail').value ? { 'EmailMismatch': true } : null;
  } else {
    return null;
  }
}