import {Component, Input, OnInit} from '@angular/core';
import {Request} from "../shared/request";
import {User} from "../shared/user";
import {RequestService} from "../shared/request.service";
import {UserService} from "../shared/user.service";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-request-list-item',
  templateUrl: './request-list-item.component.html',
  styles: [
  ]
})
export class RequestListItemComponent implements OnInit {
@Input() request: Request | undefined;


  constructor(
    private rs: RequestService,
    private us: UserService,
    private as: AuthenticationService,
  ) {
  }

  ngOnInit(): void {

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
      });

    }
  }

  getAccepted(){
    if(this.request?.status == "accepted"){
      console.log("Akzeptiertes offer"); //wenn etwas akzeptiert wurde, das feld ausgrauen

    }
  }

}
