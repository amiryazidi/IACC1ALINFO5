import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  login= new FormControl('',Validators.required);
  pwd= new FormControl('',Validators.required);

  save(){
    console.log(this.login)

  }

  FormLogin = new FormGroup({
    nom:new FormControl('',[Validators.required,Validators.minLength(3)]),
    cin:new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
    tel:new FormControl('',[Validators.required,Validators.pattern('[0-9]')]),
    email:new FormControl('',[Validators.required,Validators.email]),
  })
}
