import {Offer} from "./offer";
import {User} from "./user";

export class Request {
  constructor(
    public id: number,
    public status:string,
    public offer: Offer,
    public user: User,
    public offer_id: number
  ) {
  }
}
