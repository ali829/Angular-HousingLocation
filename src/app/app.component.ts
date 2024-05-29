import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: "app-root",
  template: `<main>
    <header class="brand-name">
      <a routerLink="/">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true" />
      </a>
    </header>
    <section class="content">
      <router-outlet />
    </section>
  </main>`,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homes";
}
