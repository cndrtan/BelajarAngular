import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private router: Router) {}

  @Input() dataInput: any;

  deleteData(data:any) {
    const index: number = this.dataInput.indexOf(data);
    if (index !== -1) {
        this.dataInput.splice(index, 1);
    }        
  }

  updateData(data:any){
    // this.reactForm.setValue(data);
    // this.deleteData(data);
  }

  viewClick(input: any){
    if (input) {
      this.router.navigate(['detail'],{queryParams:input})
    }
  }
}
