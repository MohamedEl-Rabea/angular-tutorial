import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormValidationLogicInsideComponentComponent } from './reactive-form-validation-logic-inside-component/reactive-form-validation-logic-inside-component.component';

const routes: Routes = [
  { path: "forms", component: HomeComponent },
  { path: "template-driven-forms", component: TemplateDrivenFromComponent },
  { path: "model-driven-forms", component: ReactiveFormComponent },
  { path: "model-driven-forms-validation-in-component", component: ReactiveFormValidationLogicInsideComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
