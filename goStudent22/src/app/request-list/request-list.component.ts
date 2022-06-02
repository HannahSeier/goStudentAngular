import { Component, OnInit } from '@angular/core';
import {OfferService} from "../shared/offer.service";
import {UserService} from "../shared/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../shared/request.service";
import {AuthenticationService} from "../shared/authentication.service";
import {User} from "../shared/user";
import {UserFactory} from "../shared/user-factory";
import {Request} from "../shared/request";
import {Offer} from "../shared/offer";

@Component({
  selector: 'bs-request-list',
  templateUrl: './request-list.component.html',
  styles: [
  ]
})
export class RequestListComponent implements OnInit {
  user: User = UserFactory.empty();
  request: Request | undefined;
  offer: Offer[] = [];
  requests: Request[] = [];

  constructor(
    private os: OfferService,
    private us: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private rs: RequestService,
    public authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.rs.getRequestForUser(this.authService.getCurrentUserId()).subscribe(requests => {
      this.requests = requests;

    });
  }

  isTeacher(){

    if(this.authService.getCurrentRole() == "1"){
      return true;
    }return false;

  }




}
