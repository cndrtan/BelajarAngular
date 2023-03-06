import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private router: Router) {}

  @Output() view: EventEmitter<any> = new EventEmitter();
  
  reactForm = new FormGroup({
    nameValue: new FormControl('', [Validators.required]),
    emailValue: new FormControl('', [Validators.required, Validators.email]),
    contactValue: new FormControl('', [Validators.required, Validators.minLength(12), Validators.pattern("^[0-9]*$")])
  });

  get getNameValue(){
    return this.reactForm.get('nameValue');
  }
  get getEmailValue(){
    return this.reactForm.get('emailValue');
  }
  get getContactValue(){
    return this.reactForm.get('contactValue');
  }

  selectedData: any;

  //myObjArray: any = []
  myObjArray: any = [{nameValue: 'Candra',emailValue: 'candra@mail.com', contactValue: '2384793'}]

  onSubmit(){
    this.myObjArray.push(this.reactForm.value);
    console.log(this.myObjArray);

    // this.reactForm.controls['nameValue'].setValue('');
    // this.reactForm.controls['emailValue'].setValue('');
    // this.reactForm.controls['contactValue'].setValue('');
  }

  deleteData(data:any) {
    const index: number = this.myObjArray.indexOf(data);
    if (index !== -1) {
        this.myObjArray.splice(index, 1);
    }        
  }

  updateData(data:any){
    this.reactForm.setValue(data);
    this.deleteData(data);
  }

  viewClick(input: any){
    if (input) {
      // this.view.emit(input);
      this.router.navigate(['detail'],{queryParams:input})
    }
  }
}
