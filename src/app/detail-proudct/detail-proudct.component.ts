import { Product } from './../model/product';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { ConsumerProductService } from '../Services/consumer-product.service';

@Component({
  selector: 'app-detail-proudct',
  templateUrl: './detail-proudct.component.html',
  styleUrls: ['./detail-proudct.component.css']
})
export class DetailProudctComponent {
id!:number
product!:Product
  constructor(private Act: ActivatedRoute,private ps:ProductService,private cons:ConsumerProductService) { }


  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    this.cons.getProductbyId(this.id).subscribe({
      next:(data)=>this.product=data,
      error:(err)=>console.log(err)
    }
    )
  //this.product=this.ps.listProduct.find((product:Product)=>product.id==this.id)

  }
}
