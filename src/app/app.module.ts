import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'detail', component: DetailComponent},
  { path: '', redirectTo: 'table', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
