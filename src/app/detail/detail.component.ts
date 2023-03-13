import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  @Input() data: any;

  dataRouting: any;
  paramID: any;

  constructor(private activateroute:ActivatedRoute, private router: Router, private contactService: ContactService){
    this.paramID = activateroute.snapshot.params;
    console.log(this.paramID);
  }
  ngOnInit(): void {
    this.contactService.getDatabyID(this.paramID.id).subscribe((contact:any) => {
      this.dataRouting = contact;
      console.log(contact);
    });
  }

  backClick(){
    this.router.navigate(['form']);
  }
}
