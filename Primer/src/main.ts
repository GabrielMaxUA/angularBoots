import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Name, WeatherLocation } from "./modules/NameAndWeather";

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));  // for example purposes for 80 - 92 pages in the book

  let name = new Name("Adam", "Freeman"); 
  let loc = new WeatherLocation("raining", "London"); 

  console.log(name.nameMessage); 
  console.log(loc.weatherMessage);