import { ShopService } from './../../shared/services/shop.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-pages',
  templateUrl: './gestion-pages.component.html',
  styleUrls: ['./gestion-pages.component.scss']
})
export class GestionPagesComponent implements OnInit {

  userRegisterForm!:FormGroup

  constructor(private formBuilder: FormBuilder,private shopService:ShopService,private router:Router) { }

  nuevoProducto!: any

  ngOnInit(): void {
    this.userRegisterForm=this.formBuilder.group({

      name:["",[Validators.required,Validators.minLength(4)]],
      price:["",[Validators.required,Validators.minLength(1)]],
      description:["",[Validators.required,Validators.minLength(4)]],
      stars:["",[Validators.required,Validators.minLength(1)]],
      image:["",[Validators.required,Validators.minLength(5)]]
    })
  }
  submit(){

    this.nuevoProducto = this.userRegisterForm.value
    console.log(this.nuevoProducto)

    this.shopService.addProduct(this.nuevoProducto)

    console.log("ok")
    this.userRegisterForm.reset()

    this.router.navigate(['/products'])

  }

}
