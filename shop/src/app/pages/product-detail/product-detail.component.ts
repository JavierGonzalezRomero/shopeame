import { ShopService } from './../../shared/services/shop.service';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() estrellas:any = []
  product!:any
  id!:number
  userRegisterForm!:FormGroup



  constructor(private shopService:ShopService,private activatedRoute:ActivatedRoute,private router:Router,private formBuilder: FormBuilder) { }

  nuevoProducto: any = this.product


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id =Number(params.get('id'))
      this.shopService.getProductByid(this.id).subscribe((data:any) => {this.product =data})
    })
    this.userRegisterForm=this.formBuilder.group({

      name:["",[Validators.required,Validators.minLength(4)]],
      price:["",[Validators.required]],
      description:["",[Validators.required]],
      stars:["",[Validators.required]],
      image:["",[Validators.required]],

    })


  }
  submit(){

    this.nuevoProducto = this.userRegisterForm.value
    this.nuevoProducto.id = this.id
    console.log(this.nuevoProducto)
    this.shopService.putProduct(this.nuevoProducto).subscribe()
    this.userRegisterForm.reset()
    window.location.reload()

  }

  eliminar(){
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id =Number(params.get('id'))
      this.shopService.delete(this.id).subscribe((data:any) => {this.product =data})
      this.router.navigate(['/products'])
    })
  }
}
