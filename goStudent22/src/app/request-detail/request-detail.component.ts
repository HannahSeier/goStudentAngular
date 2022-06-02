import { Component, Input, OnInit } from '@angular/core';
import {User} from "../shared/user";
import {Request} from "../shared/request";
import {OfferService} from "../shared/offer.service";
import {UserFactory} from "../shared/user-factory";
import {UserService} from "../shared/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../shared/request.service";
import {Offer} from "../shared/offer";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-request-detail',
  templateUrl: './request-detail.component.html',
  styles: [
  ]
})
export class RequestDetailComponent implements OnInit {
  @Input() request: Request | undefined;
  user: User = UserFactory.empty();

  offer: Offer[] = [];
  requests: Request[] = [];

  constructor(
    private os: OfferService,
    private us: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private rs: RequestService,
    public authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    if (this.request) {
 
    }


  }

  isOpen() {
    if (this.request?.status == "open") {
      return true;
    }
    return false;
  }

  delete() {
    console.log("Hi");
    if (this.request) {
      if (confirm('Anfrage wirklich löschen?')) {
        this.rs.delete(this.request.id).subscribe(res => this.router.navigate(['../../courses']));
    }
  }
}

}




