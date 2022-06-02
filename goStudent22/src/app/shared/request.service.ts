import { Injectable } from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Request} from "./request";
import {Offer} from "./offer";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private api = "http://gostudent.s1910456031.student.kwmhgb.at/api/requests";

  constructor(
    private http: HttpClient
  ) { }

  //Error
  errorHandler(error: Error | any): Observable<any> {
    return throwError(error)
  }

  //get all Requests
  getAll(): Observable<Array<Request>> {
    return this.http.get<Array<Request>>(`${this.api}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  //update Request
  update(id: any, requestBody: any) {
    return this.http.put(`${this.api}/update/${id}`, requestBody)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  //create request
  create(request: any): Observable<any> {
    return this.http.post(`${this.api}`, request)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  // Delete request
  delete(id: Number): Observable<any> {
    console.log("test123");
    return this.http.delete(`${this.api}/deleteById/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }


  //get requests by user id
  getRequestForUser(id: Number): Observable<Array<Request>> {
    return this.http.get<Array<Request>>(`${this.api}/getRequestforUser/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }


}
