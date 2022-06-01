import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../shared/course";
import {AuthenticationService} from "../shared/authentication.service";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../shared/course.service";


@Component({
  selector: 'bs-course-detail',
  templateUrl: './course-detail.component.html',
  styles: []
})
export class CourseDetailComponent implements OnInit {
   course: Course | undefined;

  constructor(
    private as: AuthenticationService,
    private route: ActivatedRoute,
    private cs: CourseService
  ){ }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.cs.getSingleCourse(params['id']).subscribe(course => {this.course = course});
  }

  isTeacher(){

    if(this.as.getCurrentRole() == "1"){
      return true;
    }return false;

  }

}
