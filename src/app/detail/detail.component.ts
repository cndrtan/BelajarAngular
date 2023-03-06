import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  @Input() data: any;

  dataRouting: any;

  constructor(private activateroute:ActivatedRoute, private router: Router){
    this.dataRouting = activateroute.snapshot.queryParams;
  }

  backClick(){
    this.router.navigate(['table']);
  }
}
