import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';

const routes: Routes = [
  { path: "forms", component: HomeComponent },
  { path: "template-driven-forms", component: TemplateDrivenFromComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
