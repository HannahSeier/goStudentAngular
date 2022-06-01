import {Offer} from "./offer";
import {User} from "./user";
import {Course} from "./course";

export class OfferFactory {
  static empty(): Offer{
    return new Offer(
      0,
      "",
      "",
      "",
      "",
      new Date(),
      "open",
      "",
      "",
      {id: 0, name:"", email: "",password:"", isTeacher:true },
      new Course(0,"","",), 0, 0
    )
  }


  static fromObject(rawOffer: any): Offer {
    return new Offer(
      rawOffer.id,
      rawOffer.description,
      rawOffer.title,
      rawOffer.start,
      rawOffer.end,
      rawOffer.date,
      rawOffer.status,
      rawOffer.studentID,
      rawOffer.urlImg,
      rawOffer.user_id,
      rawOffer.course_id
    )
  }
}
