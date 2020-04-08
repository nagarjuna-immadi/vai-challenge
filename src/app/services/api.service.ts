import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api: string = 'assets/mock-data.json';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get(this.api).pipe(
      map(data => data as User)
    );
  }
}
