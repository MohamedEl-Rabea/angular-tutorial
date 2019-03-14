import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataSharingModule } from './data-sharing/data-sharing.module';
import { FormsModule } from './forms/forms.module';
import { CrudModule } from './crud/crud.module';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataSharingModule,
    FormsModule,
    CrudModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
