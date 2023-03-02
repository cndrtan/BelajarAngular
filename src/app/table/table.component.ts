import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  reactForm = new FormGroup({
    nameValue: new FormControl(''),
    emailValue: new FormControl(''),
    contactValue: new FormControl('')
  });


  onSubmit(){
    console.log(this.reactForm.value)
  }
}
