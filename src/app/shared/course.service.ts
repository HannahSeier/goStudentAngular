import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable,throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';
import {Course} from "./course";



@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private api = "http://gostudent.s1910456031.student.kwmhgb.at/api/courses";
  constructor(private http: HttpClient) {

  }

  //Error
  errorHandler(error: Error | any): Observable<any> {
    return throwError(error)
  }

  //get single course
  getSingleCourse(id: String): Observable<Course> {
    return this.http.get<Course>(`${this.api}/getById/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  //get all courses
  getAll(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(`${this.api}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  update(id: String): Observable<any> {
    return this.http.get<Course>(`${this.api}/getById/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  // Delete Offer
  delete(id: Number): Observable<any> {
    return this.http.delete(`${this.api}/deleteById/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }
}



