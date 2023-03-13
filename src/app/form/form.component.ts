import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../model/contact.model';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private contactService: ContactService){}
  
  ngOnInit(): void {
    //console.log(this.contactService.getData());
    this.getDataFunc();
    // this.myObjArray = this.contactService.contact;
    // console.log(this.contactService.contact);
  }

  @Output() view: EventEmitter<any> = new EventEmitter();
  
  reactForm = new FormGroup({
    id: new FormControl(0),
    nameValue: new FormControl('', [Validators.required]),
    emailValue: new FormControl('', [Validators.required, Validators.email]),
    phoneValue: new FormControl('', [Validators.required, Validators.minLength(12), Validators.pattern("^[0-9]*$")])
  });

  get getNameValue(){
    return this.reactForm.get('nameValue');
  }
  get getEmailValue(){
    return this.reactForm.get('emailValue');
  }
  get getPhoneValue(){
    return this.reactForm.get('phoneValue');
  }

  // selectedData: any = [];

  getDataFunc(){
    this.contactService.getData().subscribe((contact:any) => {
      this.myObjArray = contact;
      console.log(contact);
    });
  }


  myObjArray: any = []
  //myObjArray: any = [{nameValue: 'Candra',emailValue: 'candra@mail.com', phoneValue: '2384793'}]

  onSubmit(){
    //this.myObjArray.push(this.reactForm.value);
    //console.log(this.myObjArray);
    if (this.isUpdate){
      let tampungData: Contact = {
        id: this.reactForm.controls['id'].value!,
        name: this.reactForm.controls['nameValue'].value!,
        email: this.reactForm.controls['emailValue'].value!,
        phone: this.reactForm.controls['phoneValue'].value!
      }

      this.contactService.updateDatabyID(tampungData.id!,tampungData);
      this.getDataFunc();
    }else{
      this.checkData(this.myObjArray);

      let tampungData: Contact = {
        name: this.reactForm.controls['nameValue'].value!,
        email: this.reactForm.controls['emailValue'].value!,
        phone: this.reactForm.controls['phoneValue'].value!
      }
      this.contactService.postData(tampungData);
      this.getDataFunc();
    }
  }

  checkData(input:any){
    this.view.emit(input);
  }

  currContact = new Contact();
  isUpdate = false;

  ambilDariTable(input:any){
    // this.currContact.name = input.name
    // this.currContact.phone = input.phone
    // this.currContact.email = input.email
    this.isUpdate = true;

    this.reactForm.setValue({
      id: input.id,
      nameValue : input.name,
      phoneValue: input.phone,
      emailValue: input.email
    });
  }

}
