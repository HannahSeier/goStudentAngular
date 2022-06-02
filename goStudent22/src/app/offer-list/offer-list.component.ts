import {Component, Input, OnInit} from '@angular/core';
import {Offer} from "../shared/offer";
import {ActivatedRoute} from "@angular/router";
import {OfferService} from "../shared/offer.service";
import {Course} from "../shared/course";
import {AuthenticationService} from "../shared/authentication.service";


@Component({
  selector: 'bs-offer-list',
  templateUrl: './offer-list.component.html',
  styles: [
  ]
})
export class OfferListComponent implements OnInit {

  @Input() course: Course | undefined;
  public offers: Offer[] = [];


  constructor(
              private authService: AuthenticationService,
              private route: ActivatedRoute,
              private os: OfferService) { }

  ngOnInit(): void {
    const courseId = this.route.snapshot.params["id"];

    if(courseId){
      this.os.getOfferByCourseId(courseId.toString()).subscribe(offers => {this.offers = offers});
    } else {
      this.os.getOpenOffers().subscribe(offers => {
        this.offers = offers
      });
    }
  }


    isTeacher(){
      if(this.authService.getCurrentRole() == "1"){
        return true;
      }return false;

    }


}
