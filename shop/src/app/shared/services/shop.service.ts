import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }


  getProducts(){
    return this.http.get("http://localhost:3000/products")
  }

  getProductByid(id:number){

    return this.http.get("http://localhost:3000/products/"+id)
  }

  addProduct(product:any):void{
   this.http.post("http://localhost:3000/products",product).subscribe()

  }
  delete(id:number){
    return this.http.delete("http://localhost:3000/products" + '/' + id)
  }

  putProduct(nuevoProducto:any){
    return this.http.put("http://localhost:3000/products" + '/' + nuevoProducto.id,nuevoProducto)
  }

}
