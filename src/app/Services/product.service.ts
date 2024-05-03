import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  listProduct:any[]=[
    {id:1,title:"iphone 12",price:1000, quantity:5,like:0},
    {id:2,title:"product 13",price:2000, quantity:4,like:0},
    {id:3,title:"product 14",price:3000, quantity:0,like:0},
  ]


  AddProduct(prod:Product){
    this.listProduct.push(prod)
  }
}
