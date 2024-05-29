import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponentComponent } from "src/app/housing-location-component/housing-location-component.component";
import { HousingLocation } from "../housinglocation";
import { HousingService } from "../services/housing.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponentComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="" type="button">Search</button>
      </form>
      <section class="results">
        <app-housing-location-component
          *ngFor="let housingLocation of housingLocationList"
          [housingLocation]="housingLocation"></app-housing-location-component>
      </section>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[] | undefined = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
