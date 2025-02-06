import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private apiUrl = 'https://api.chucknorris.io/jokes/categories';

  constructor(private http: HttpClient) { }
  getCategory(): Observable<any> {
    return this.http.get(`${this.apiUrl}`)
  }
}
