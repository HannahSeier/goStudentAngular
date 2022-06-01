import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';

import { HomeComponent } from './home/home.component';
import {CourseService} from "./shared/course.service";
import {HttpClientModule} from "@angular/common/http";
import {OfferService} from "./shared/offer.service";
import { OfferFormComponent } from './offer-form/offer-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./shared/authentication.service";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RequestListItemComponent } from './request-list-item/request-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailComponent,
    OfferListComponent,
    OfferDetailComponent,
    RequestListComponent,
    RequestDetailComponent,
    CommentListComponent,
    CommentDetailComponent,
    CourseListItemComponent,
    HomeComponent,
    OfferFormComponent,
    LoginComponent,
    UserDetailComponent,
    RequestListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ CourseService, OfferService, AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
