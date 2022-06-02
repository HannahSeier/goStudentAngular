import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import jwt_decode from "jwt-decode";
//npm install --save-dev jwt-decode
interface Token {
  exp: number;
  user: {
    id: string,
    isTeacher: boolean
  };
}
@Injectable()
export class AuthenticationService {
  private api: string =
    "http://gostudent.s1910456031.student.kwmhgb.at/api/auth";
//'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

  public getCurrentUserId() {
    return Number.parseInt(<string>sessionStorage.getItem("userId"));
  }
  public getCurrentRole() {
    return <string>sessionStorage.getItem("role");
  }

  public setSessionStorage(token: string) {

    const decodedToken = jwt_decode(token) as Token;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", decodedToken.user.id);
    sessionStorage.setItem("role", decodedToken.user.isTeacher.toString());
   
  }
  logout() { this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("role");
  }
  public isLoggedIn() {
    if (sessionStorage.getItem("token")) {
      let token: string = <string>sessionStorage.getItem("token");
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp); if (expirationDate < new Date()) {
        sessionStorage.removeItem("token"); return false;
      }
      return true;
    } else {
      return false;
    }
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }




}
