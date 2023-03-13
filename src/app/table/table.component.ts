import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../model/contact.model';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private router: Router, private contactService: ContactService) {}

  @Input() dataInput: any;

  @Output() delete: EventEmitter<any> = new EventEmitter();

  @Output() lemparKeForm = new EventEmitter();

  deleteData(id: number) {
    // const index: number = this.dataInput.indexOf(data);
    // if (index !== -1) {
    //     this.dataInput.splice(index, 1);
    // }  
    // console.log(id);
    this.contactService.deleteDatabyID(id).subscribe();
    this.delete.emit();
  }

  updateData(data:any){
    // this.reactForm.setValue(data);
    // this.deleteData(data);

    this.lemparKeForm.emit(data);
    // console.log(data);
  }

  viewClick(input: Contact){
    if (input) {
      // this.router.navigate(['detail'],{queryParams:input})
      this.router.navigate(['detail', input.id]);
    }
  }
}
