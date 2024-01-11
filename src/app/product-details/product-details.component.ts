import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product: any; 
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['productId']; 
      this.productsService.getProductById(this.productId).subscribe(
        (data: any) => {
          this.product = data; 
        },
        (error) => {
          console.error('Error fetching product details:', error);
          
        }
      );
    });
  }
}
