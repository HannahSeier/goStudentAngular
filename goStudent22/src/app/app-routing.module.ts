import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {HomeComponent} from "./home/home.component";
import {OfferListComponent} from "./offer-list/offer-list.component";
import {OfferDetailComponent} from "./offer-detail/offer-detail.component";
import {OfferFormComponent} from "./offer-form/offer-form.component";
import {LoginComponent} from "./login/login.component";
import {RequestDetailComponent} from "./request-detail/request-detail.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent},
  { path: 'offers', component: OfferListComponent},
  { path: 'offers/:id', component: OfferDetailComponent},
  { path: 'admin', component: OfferFormComponent },
  { path: 'admin/:id', component: OfferFormComponent },
  //login route
  { path: 'login', component: LoginComponent},
  //overview requests
  { path: 'requests', component: RequestDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
