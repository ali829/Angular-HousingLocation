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
        <input type="text" placeholder="Filter by city" #filter />
        <button class="" type="button" (click)="filterLocations(filter.value)">
          Search
        </button>
      </form>
      <section class="results">
        <app-housing-location-component
          *ngFor="let filteredHousingLocationL of filteredHousingLocationList"
          [housingLocation]="
            filteredHousingLocationL
          "></app-housing-location-component>
      </section>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[] | undefined = [];
  filteredHousingLocationList: HousingLocation[] | undefined = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredHousingLocationList = housingLocationList;
      });
  }
  filterLocations(text: string): void {
    console.log(text);
    if (!text) {
      this.filteredHousingLocationList = this.housingLocationList;
      return;
    }

    this.filteredHousingLocationList = this.housingLocationList?.filter(
      (hl) => {
        return hl.city.toLowerCase().includes(text.toLowerCase());
      }
    );
  }
}
