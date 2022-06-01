import {Offer} from "./offer";
import {User} from "./user";


export class Comment {
  constructor(
    public id: number,
    public comment: string,
    public offer: Offer,
    public user: User
  ) {

  }
}
