import { AppComponent } from './../../app.component';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products: Product[] = [];
  dataLoaded=false;
  filterText="";
  constructor(private ProductService:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{

      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts();
      }
    });
  }

  getProducts(){
  this.ProductService.getProducts().subscribe(response=>{
    this.products=response.data
    this.dataLoaded=true;
  })

  }
  getProductsByCategory(categoryId:number){
    this.ProductService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
  
    }
    
    

}
