import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../Services/product.service';
import { CalculService } from '../Serices/calcul.service';
import { ConsumerProductService } from '../Services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  priceMax!:number
  listProduct:any[]=[]
  alert!:number

  constructor(private ps:ProductService, private cl:CalculService,private consP:ConsumerProductService) {}

  ngOnInit(){
   // this.listProduct=this.ps.listProduct

   this.consP.getProducts().subscribe({
   next: (data)=> this.listProduct=data,
   error: (err)=>console.log(err)

   }

   )

    this.alert=this.cl.calcul(this.listProduct,'quantity',0)
  }

  increment(id:number)
  {
    this.listProduct.find((product:Product)=>product.id==id).like++
  }

  buy(id:number){
    this.listProduct.find((product:Product)=>product.id==id).quantity--

  }
}
