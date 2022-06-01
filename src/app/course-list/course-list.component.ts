import {Component,EventEmitter, OnInit, Output} from '@angular/core';
import {Course} from "../shared/course";

import {CourseService} from "../shared/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bs-course-list',
  templateUrl: './course-list.component.html',
  styles: []
})
export class CourseListComponent implements OnInit {

  public courses: Course[] = [];



  constructor(private route: ActivatedRoute,
              private cs: CourseService) {}

  ngOnInit(): void {

    const params = this.route.snapshot.params;
    this.cs.getAll().subscribe(courses => {this.courses = courses});
  }


}

