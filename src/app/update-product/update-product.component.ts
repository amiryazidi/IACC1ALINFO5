import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerProductService } from '../Services/consumer-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  FormLogin = new FormGroup({
    id:new FormControl('',Validators.required),
    title:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    quantity:new FormControl('',Validators.required),
    like:new FormControl('',Validators.required),
  })

  id!:number
  product!:Product
    constructor( private consP:ConsumerProductService,private rt:Router, private act :ActivatedRoute) { }


    ngOnInit(){
      //1- recuperer l'id depuis l'url
      this.id=this.act.snapshot.params['id']
      // recuperer le produit lui meme
        this.consP.getProductbyId(this.id).subscribe(
          (d)=>{
            this.product=d,
            this.FormLogin.patchValue(this.product as any)
          }
        )
    }
  save(){
    this.consP.updateProduct(this.FormLogin.value as any,this.id).subscribe(
      ()=>this.rt.navigate(['/product']),
    )
}

}