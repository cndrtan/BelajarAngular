import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  nameValue:string = '';
  emailValue:string = '';
  contactValue:string = '';

  //dataModel = new Data("Candra","candra@mail.com","123");

  //myObjArray = [this.dataModel];
  onSubmit(){
    //this.myObjArray.push({nama: this.nameValue,email: this.emailValue, contact:this.contactValue});
    //console.log(this.myObjArray);
    this.nameValue = '';
    this.emailValue = '';
    this.contactValue = '';
  }

  // deleteData(key: number){
  //   this.myObjArray.forEach((element,index)=>{
  //     if(element.id==key) this.myObjArray.splice(index,1);
  //  });
  // }
}
