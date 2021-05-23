import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private baseurl = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }


  register(data): Observable<any> {
    return this.http.post<any>(this.baseurl+'register', data);
  }
}
