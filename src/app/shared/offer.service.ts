import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Offer} from "./offer";
import {Course} from "./course";


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private api = "http://gostudent.s1910456031.student.kwmhgb.at/api/offers";

  constructor(private http: HttpClient) { }

  //Error
  errorHandler(error: Error | any): Observable<any> {
    return throwError(error)
  }

  //get single offer
  getOfferByOfferId(id: String): Observable<Offer> {
    return this.http.get<Offer>(`${this.api}/getByOfferId/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  //get single offer by offer Id
  getOfferByCourseId(id: String): Observable<Array<Offer>> {
    return this.http.get<Array<Offer>>(`${this.api}/getByCourseId/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  //get all Offers
  getAll(): Observable<Array<Offer>> {
    return this.http.get<Array<Offer>>(`${this.api}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  //update Offer
  update(id: any, requestBody: any) {
    return this.http.put(`${this.api}/update/${id}`, requestBody)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  //create Offer
  create(offer: any): Observable<any> {
    return this.http.post(`${this.api}`, offer)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  // Delete Offer
  delete(id: Number): Observable<any> {
    return this.http.delete(`${this.api}/deleteById/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  //get open offers
  getOpenOffers(): Observable<Array<Offer>> {
    return this.http.get<Array<Offer>>(`${this.api}/getOpen`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

}


