import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../shared/comment";
@Component({
  selector: 'bs-comment-detail',
  templateUrl: './comment-detail.component.html',
  styles: [
  ]
})

export class CommentDetailComponent {
  @Input() comment: Comment | undefined
  }
