import { Component } from "@angular/core";
import { HomeComponent } from "src/app/home/home.component";

@Component({
  standalone: true,
  imports: [HomeComponent],
  selector: "app-root",
  template: `<main>
    <header class="brand-name">
      <img
        class="brand-logo"
        src="/assets/logo.svg"
        alt="logo"
        aria-hidden="true" />
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>`,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homes";
}
