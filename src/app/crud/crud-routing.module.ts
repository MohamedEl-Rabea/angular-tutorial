import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { EmployeeCrudComponent } from './employee-crud.component';
import { EmployeeCrudListComponent } from './employee-crud-list/employee-crud-list.component';
import { EmployeeCrudCreateComponent } from './employee-crud-create/employee-crud-create.component';

const crudRoutes: Routes = [
  { path: "employee-crud", component: EmployeeCrudComponent },
  { path: "employee-crud-list", component: EmployeeCrudListComponent },
  { path: "employee-crud-create", component: EmployeeCrudCreateComponent },
]

@NgModule({
  imports: [RouterModule.forChild(crudRoutes)]
})
export class CrudRoutingModule { }
