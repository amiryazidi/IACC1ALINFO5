import { Product } from './../model/product';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-detail-proudct',
  templateUrl: './detail-proudct.component.html',
  styleUrls: ['./detail-proudct.component.css']
})
export class DetailProudctComponent {
id!:number
product!:Product
  constructor(private Act: ActivatedRoute,private ps:ProductService) { }


  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    this.product=this.ps.listProduct.find((product:Product)=>product.id==this.id)
  }
}
