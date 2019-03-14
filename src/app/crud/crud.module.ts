import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCrudComponent } from './employee-crud.component';
import { CrudRoutingModule } from './crud-routing.module';
import { EmployeeCrudListComponent } from './employee-crud-list/employee-crud-list.component';
import { EmployeeCrudCreateComponent } from './employee-crud-create/employee-crud-create.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [EmployeeCrudComponent, EmployeeCrudListComponent, EmployeeCrudCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
