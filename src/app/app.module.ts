import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { routing} from "./app.routing";

import { AppComponent } from "./app.component";
import { CarouseComponent } from "./home/carouse/carouse.component";
import { HotNewsComponent } from "./home/hot-news/hot-news.component";
import { StatisticsComponent } from "./home/statistics/statistics.component";
import { HomeComponent } from "./home/home.component";
import { VacancyComponent } from "./vacancy/vacancy.component";
import { LearningComponent } from "./learning/learning.component";
import { LocationComponent} from "./location/location.component";
import {ViewComponent} from "./vacancy/view/view.component";
import {VacancyListComponent} from "./vacancy/vacancy-list/vacancy-list.component";
import {VacancyItemComponent} from "./vacancy/vacancy-item/vacancy-item.component";
import {FiltersComponent} from "./vacancy/filters/filters.component";


@NgModule({
  declarations: [
    AppComponent, LocationComponent, CarouseComponent, HotNewsComponent,
    StatisticsComponent, HomeComponent, VacancyComponent, LearningComponent, ViewComponent,
    VacancyListComponent, VacancyItemComponent, FiltersComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
