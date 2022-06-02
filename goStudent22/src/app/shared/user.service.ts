import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Offer} from "./offer";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = "http://gostudent.s1910456031.student.kwmhgb.at/api/users";

  constructor(private http: HttpClient) {

  }

  //Error
  errorHandler(error: Error | any): Observable<any> {
    return throwError(error)
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/getById/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }
}
