import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BelajarAngular';
  message = 'Coba kalau pake typescript';

  ambilData: any;

  test(event:any){
    this.ambilData = event;
  }
}