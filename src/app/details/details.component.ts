import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { HousingService } from "../services/housing.service";
import { HousingLocation } from "../housinglocation";
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Form,
} from "@angular/forms";
@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `<article>
    <img
      class="listing-photo"
      [src]="housingLocation?.photo"
      alt="Exterior photo of {{ housingLocation?.name }}"
      crossorigin />
    <section class="listing-description">
      <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
      <p class="listing-location">
        {{ housingLocation?.city }}, {{ housingLocation?.state }}
      </p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{ housingLocation?.availableUnits }}</li>
        <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
        <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
      </ul>
    </section>
    <form [formGroup]="applyForm" (submit)="submitApplication()">
      <label for="first-name">First Name :</label>
      <input
        type="text"
        name="first-name"
        id="first-name"
        formControlName="firstName" />

      <label for="first-name">Last Name :</label>
      <input
        type="text"
        name="last-name"
        id="last-name"
        formControlName="lastName" />

      <label for="email">Email :</label>
      <input type="text" name="email" id="email" formControlName="email" />

      <button class="primary" type="submit">Apply Now</button>
    </form>
  </article> `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  housingLocation: HousingLocation | undefined;
  housingService: HousingService = inject(HousingService);
  route: ActivatedRoute = inject(ActivatedRoute);
  houseLocationId: number = -1;
  applyForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  constructor() {
    this.houseLocationId = Number(this.route.snapshot.params["id"]);
    this.housingService
      .getHousingLocationById(this.houseLocationId)
      .then((housingLocation: HousingLocation) => {
        this.housingLocation = housingLocation;
      });
  }

  submitApplication(): void {
    this.housingService.housingApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? ""
    );
  }
}
