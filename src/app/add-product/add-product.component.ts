import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { ConsumerProductService } from '../Services/consumer-product.service';
import { Router } from '@angular/router';

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
    constructor(private ps:ProductService, private consP:ConsumerProductService,private rt:Router) { }
  save(){
    this.consP.AddProduct(this.FormLogin.value as any).subscribe(
      ()=>this.rt.navigate(['/product']),
    )
  }
  //this.ps.AddProduct(this.FormLogin.value as any)
}
