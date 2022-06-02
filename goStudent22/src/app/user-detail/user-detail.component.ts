import { Component, OnInit } from '@angular/core';
import {User} from "../shared/user";
import {AuthenticationService} from "../shared/authentication.service";
import {UserFactory} from "../shared/user-factory";
import {UserService} from "../shared/user.service";
import {Request} from "../shared/request";
import {RequestService} from "../shared/request.service";

@Component({
  selector: 'bs-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [
  ]
})
export class UserDetailComponent implements OnInit {

  user: User = UserFactory.empty();
  public req: Request[] = [];


  constructor(
    private us: UserService,
    public authService: AuthenticationService,
    private rs: RequestService
  ) { }

  ngOnInit(): void {

    this.us.getUserById(this.authService.getCurrentUserId()).subscribe(user => {
      this.user = user;

    });

  }

  isStudent(){
    
          if(this.user?.isTeacher == false){
            return true;
          } return false;
        }



}
