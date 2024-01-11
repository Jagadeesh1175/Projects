// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  searchQuery: string = '';
  isLoading: boolean = true; 

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true; 
    this.productsService.getProducts().subscribe(
      (data: any) => {
        this.products = data.data;
        this.isLoading = false; 
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false; 
      }
    );
  }

  search() {
    if (this.searchQuery) {
      this.products = this.products.filter(product =>
        product.productShortName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.getProducts();
    }
  }

  onProductClick(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
