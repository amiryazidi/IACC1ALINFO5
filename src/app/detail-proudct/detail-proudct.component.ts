import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-proudct',
  templateUrl: './detail-proudct.component.html',
  styleUrls: ['./detail-proudct.component.css']
})
export class DetailProudctComponent {
id!:number
  constructor(private Act: ActivatedRoute) { }


  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
  }
}
