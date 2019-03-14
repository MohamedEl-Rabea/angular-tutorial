import { Component, OnInit } from '@angular/core';
import { EmployeeCrudService } from '../employee-crud.service';
import { IEmployee } from '../Employee';

@Component({
  selector: 'app-employee-crud-list',
  templateUrl: './employee-crud-list.component.html',
  styleUrls: ['./employee-crud-list.component.scss']
})
export class EmployeeCrudListComponent implements OnInit {

  constructor(private employeeService: EmployeeCrudService) { }
  employeeList: IEmployee[] = [];

  ngOnInit() {
    this.employeeService.getAllEmployees()
      .subscribe(employeesData => { this.employeeList = employeesData; console.log(employeesData) });
  }

}
