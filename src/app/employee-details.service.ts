import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsService {
  _url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  passData() {
    return this.http.get(this._url);
  }
}
