import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'detail/:id', component: DetailComponent},
  { path: '', redirectTo: 'form', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
