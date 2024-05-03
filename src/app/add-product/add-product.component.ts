import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  FormLogin = new FormGroup({
    id:new FormControl('',Validators.required),
    title:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    quantity:new FormControl('',Validators.required),
    like:new FormControl('',Validators.required),
  })
    constructor(private ps:ProductService) { }
  save(){
    this.ps.AddProduct(this.FormLogin.value as any)
  }
}
