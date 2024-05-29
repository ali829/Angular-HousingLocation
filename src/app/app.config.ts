import { ApplicationConfig } from "@angular/core";
import { routesConfig } from "./routes.routing";
import { provideRouter } from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routesConfig)],
};
