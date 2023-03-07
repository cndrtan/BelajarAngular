import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

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
    this.checkData(this.myObjArray);
  }

  checkData(input:any){
    this.view.emit(input);
  }

}
