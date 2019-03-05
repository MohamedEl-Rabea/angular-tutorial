import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as SystemFormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormValidationLogicInsideComponentComponent } from './reactive-form-validation-logic-inside-component/reactive-form-validation-logic-inside-component.component';

@NgModule({
  declarations: [
    HomeComponent,
    TemplateDrivenFromComponent,
    ReactiveFormComponent,
    ReactiveFormValidationLogicInsideComponentComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SystemFormsModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
