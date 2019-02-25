import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.scss']
})
export class TemplateDrivenFromComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  genderList = ['Male', 'Female'];
  model = new UserModel();
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }
  get diagnostics(): string {
    return JSON.stringify(this.model);
  }
}
