import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  priceMax!:number
  listProduct:any[]=[
    {id:1,title:"iphone 12",price:1000, quantity:5,like:0},
    {id:2,title:"product 13",price:2000, quantity:4,like:0},
    {id:3,title:"product 14",price:3000, quantity:0,like:0},
  ]

  increment(id:number)
  {
    this.listProduct.find((product:Product)=>product.id==id).like++
  }

  buy(id:number){
    this.listProduct.find((product:Product)=>product.id==id).quantity--

  }
}
