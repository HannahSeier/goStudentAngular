import {User} from "./user";
import {Course} from "./course";

export class Offer {
  constructor(
    public id: number,
    public description: string,
    public title: string,
    public start: string,
    public end: string,
    public date: Date,
    public status: string,
    public studentID: string,
    public urlImg: string,
    public user : User,
    public course: Course,
    public user_id?: number,
    public course_id?: number
  ) {
  }
}
