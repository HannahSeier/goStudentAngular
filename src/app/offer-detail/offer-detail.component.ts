import {Component, Input, OnInit} from '@angular/core';
import {Offer} from "../shared/offer";
import {ActivatedRoute, Router} from "@angular/router";
import {OfferService} from "../shared/offer.service";
import {Course} from "../shared/course";
import {User} from "../shared/user";
import {UserService} from "../shared/user.service";
import {UserFactory} from "../shared/user-factory";
import {AuthenticationService} from "../shared/authentication.service";
import {RequestService} from "../shared/request.service";
import {Request} from "../shared/request";


@Component({
  selector: 'bs-offer-detail',
  templateUrl: './offer-detail.component.html',
  styles: []
})
export class OfferDetailComponent implements OnInit {

  offer: Offer | undefined;
  user: User = UserFactory.empty();



  constructor(
    private route: ActivatedRoute,
    private os: OfferService,
    private us: UserService,
    private router: Router,
    public authService: AuthenticationService,
    private rs: RequestService
  ) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.os.getOfferByOfferId(params['id']).subscribe(offer => {
      this.offer = offer;
      this.us.getUserById(this.offer.user.id).subscribe(user => {
        this.user = user;
      });
    });

  }

  deleteOffer() {
    if (this.offer) {
      if (confirm('Offer wirklich löschen?')) {
        this.os.delete(this.offer.id).subscribe(res => this.router.navigate(['../'], {
          relativeTo:
          this.route
        }));
      }
    }
  }

  isTeacherAndOwner() {
    if (this.offer?.user?.isTeacher && this?.offer?.user_id == this.authService.getCurrentUserId()) {
      return true;

    }
    return false;
  }

  createRequest(){
    const req = {status:"pending", offer_id: this.offer?.id, user_id: this.user.id}

    if (this.offer) {
      if (confirm('Anfrage senden?')) {
        this.rs.create(req).subscribe(res => this.router.navigate(['../../login'], {
          relativeTo:
          this.route
        }));
      }
    }

  }

  isTeacher(){
    console.log(this.authService.getCurrentRole());
    if(this.authService.getCurrentRole() == "1"){
      return true;
    }return false;

  }




}





