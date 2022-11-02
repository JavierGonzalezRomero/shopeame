import { ShopService } from './../../shared/services/shop.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
 @Input() products: any[] = []
 @Input() estrellas:any = []




  constructor(private shopService:ShopService) { }



  ngOnInit(): void {
    this.shopService.getProducts().subscribe((res:any) => {
      console.log(res)

      this.products = res

  })


  }
}
