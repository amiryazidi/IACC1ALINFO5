import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {
  url:string="http://localhost:3000/products"
  constructor(private http :HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.url)
  }
  getProductbyId(id:number){
    return this.http.get<Product>(this.url+'/'+id);
  }
  AddProduct(p:Product){
    return this.http.post(this.url,p)}
}
