import {Component, Input, OnInit} from '@angular/core';
import {Request} from "../shared/request";
import {User} from "../shared/user";
import {Offer} from "../shared/offer";
import {RequestService} from "../shared/request.service";
import {UserService} from "../shared/user.service";
import {AuthenticationService} from "../shared/authentication.service";
import { ActivatedRoute, Router } from '@angular/router';
import {OfferService} from "../shared/offer.service";
@Component({
  selector: 'bs-request-list-item',
  templateUrl: './request-list-item.component.html',
  styles: [
  ]
})
export class RequestListItemComponent implements OnInit {
@Input() request: Request | undefined;
          offer: Offer | undefined;


  constructor(
    private rs: RequestService,
    private us: UserService,
    private as: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private os: OfferService,
  ) {
  }

  ngOnInit(): void {


    if (this.request) {
      this.os.getOfferByOfferId(this.request?.offer_id).subscribe(offer => {
        this.offer = offer;
        console.log(this.offer);

      });
    }
  }

  accept(){
    let curUserId = this.as.getCurrentUserId();
    if(this.request?.status){
      confirm("Dieses Angebot annehmen?");
      const req = this.request;
      req.status = "accepted";

      let curUser = this.us.getUserById(curUserId);

      this.rs.update(req.id, req).subscribe(req => {
        this.request = req;
        if(this.request && this.request.offer_id){
          this.router.navigate(["/offers", this.request.offer_id], {
            relativeTo: this.route
          });
        }
      });

    }

  }
  deny() {
    if (this.request?.status) {
      confirm("Dieses Angebot ablehnen?");
      const req = this.request;
      req.status = "declined";
      this.rs.update(req.id, req).subscribe(req => {
        this.request = req;
        if(this.request && this.request.offer_id){
          this.router.navigate(["/offers", this.request.offer_id], {
            relativeTo: this.route
          });
        }
      });

    }
  }

  getAccepted(){
    if(this.request?.status == "accepted"){
      console.log("Akzeptiertes offer"); //wenn etwas akzeptiert wurde, das feld ausgrauen

    }
  }



}
