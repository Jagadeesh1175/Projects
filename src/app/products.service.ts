import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = './assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getProductById(productId: number): Observable<Product> {
    // Append productId to the URL
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }
}
