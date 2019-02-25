import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as SystemFormsModule} from "@angular/forms";
import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';

@NgModule({
  declarations: [HomeComponent, TemplateDrivenFromComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SystemFormsModule
  ]
})
export class FormsModule { }
