import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../user-model';
import { forbiddenNameValidator } from '../customValidators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  employeeForm;

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      fullName: ['', [Validators.required, forbiddenNameValidator(/bob/i)]],
      address: ['', Validators.required],
      contacts: this.formBuilder.group({
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }),
      gender: ['', Validators.required]
    });
  }

  handleSubmit() {
    console.log("Submitted value is: ", this.employeeForm.errors);
  }
}
