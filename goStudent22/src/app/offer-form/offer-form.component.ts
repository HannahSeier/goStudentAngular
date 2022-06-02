import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormArray, Validators, FormControl} from "@angular/forms";
import {OfferFormErrorMessages} from "./offer-form-error-messages";
import {OfferFactory} from "../shared/offer-factory";
import {OfferService} from "../shared/offer.service";
import {Offer} from "../shared/offer";
import {Course} from "../shared/course";
import {CourseService} from "../shared/course.service";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-offer-form',
  templateUrl: './offer-form.component.html',
  styles: []
})
export class OfferFormComponent implements OnInit {

  offerForm: FormGroup;
  offer = OfferFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingOffer = false;
  courses: Course[] = [];

  constructor(
    private fb: FormBuilder,
    private os: OfferService,
    private route: ActivatedRoute,
    private router: Router,
    private cs: CourseService,
    private as: AuthenticationService

  ) {
    this.offerForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.cs.getAll().subscribe(courses=> {
      this.courses = courses;
      const id = this.route.snapshot.params["id"];
      if (id) {
        this.isUpdatingOffer = true;
        this.os.getOfferByOfferId(id).subscribe(offer => {
          this.offer = offer;
          this.initOffer();
        });
      }
    });

    this.initOffer();
  }

  initOffer() {
    this.offerForm = this.fb.group({
      id: this.offer.id,
      title: [this.offer.title, Validators.required],
      description: this.offer.description,
      start: [this.offer.start, Validators.required],
      end: [this.offer.end, Validators.required],
      date: [this.offer.date, Validators.required],
      course_id: [this.offer.course_id, Validators.required]
    });
      this.offerForm.statusChanges.subscribe(() =>
        this.updateErrorMessages());
    }


  submitForm() {
// filter empty values
    const offer: Offer = OfferFactory.fromObject(this.offerForm.value); //just copy the authors
    //hier datum formatieren und zu offer zuweisen
    if (this.isUpdatingOffer) {
      offer.course_id = Number(offer.course);
      this.os.update(offer.id, offer).subscribe(res => {
        this.router.navigate(["../../offers", offer.id], {
          relativeTo: this.route
        });
      });
    } else {
      offer.user_id = this.as.getCurrentUserId();
      offer.status = "open";
      offer.studentID = "pending";
      offer.urlImg = "-";
      offer.course_id = Number(offer.course);
      console.log(offer);
      //offer.user_id = this.as.getCurrentUserId();
      this.os.create(offer).subscribe(res => {
        this.offer = OfferFactory.empty();
        this.offer = OfferFactory.empty();
        this.offerForm.reset(OfferFactory.empty());
        this.router.navigate(["../courses"], {relativeTo: this.route});
      });
    }

}

updateErrorMessages()
{
  console.log("Is invalid? " + this.offerForm.invalid);
  this.errors = {};
  for (const message of OfferFormErrorMessages) {
    const control = this.offerForm.get(message.forControl);
    if (
      control &&
      control.dirty &&
      control.invalid && control.errors && control.errors[message.forValidator] && !this.errors[message.forControl]
    ) {
      this.errors[message.forControl] = message.text;
    }
  }
}
}


