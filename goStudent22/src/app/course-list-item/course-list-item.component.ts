import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../shared/course";

@Component({
  selector: 'bs-course-list-item',
  templateUrl: './course-list-item.component.html',
  styles: [
  ]
})
export class CourseListItemComponent implements OnInit {


  @Input() course: Course | undefined

  constructor() {
  }

  ngOnInit(): void {
  }

}

