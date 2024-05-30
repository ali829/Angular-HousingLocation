import { Injectable } from "@angular/core";
import { HousingLocation } from "../housinglocation";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  protected _url = "http://localhost:3000/locations";
  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this._url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocation> {
    const data = await fetch(`${this._url}/${id}`);
    return (await data.json()) ?? {};
  }
  housingApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
