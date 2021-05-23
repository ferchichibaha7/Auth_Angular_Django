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

  login(data): Observable<any> {
    return this.http.post<any>(this.baseurl+'login', data, {
      withCredentials: true
    });
  }

  logout(): Observable<any> {
    return this.http.post<any>(this.baseurl+'logout', {}, {
      withCredentials: true
    });
  }

  getUser(): Observable<any> {
    return this.http.get<any>(this.baseurl+'user', {
      withCredentials: true
    });
  }

  deleteUser(id : number): Observable<any> {
    return this.http.delete<any>(this.baseurl+'user/'+id, {
      withCredentials: true
    });
  }

  allUsers(): Observable<any> {
    return this.http.get<any>(this.baseurl+'users', {
      withCredentials: true
    });
  }

}
