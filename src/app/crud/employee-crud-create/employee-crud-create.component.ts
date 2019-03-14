import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-crud-create',
  templateUrl: './employee-crud-create.component.html',
  styleUrls: ['./employee-crud-create.component.scss']
})
export class EmployeeCrudCreateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  employeeForm;
  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: [''],
      address: [''],
      email: [''],
      skills: this.fb.array([
        this.addNewSkillGroup()
      ])
    })
  }

  addNewSkillGroup() {
    return this.fb.group({
      skillName: [''],
      experienceInYears: [''],
      proficiency: ['']
    })
  }
}
