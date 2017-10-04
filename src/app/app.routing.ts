import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VacancyComponent } from "./vacancy/vacancy.component";
import { LearningComponent } from "./learning/learning.component";

const appRoutes: Routes = [
  {path: "", component: HomeComponent, data: {title: "Главная"}},
  {path: "vacancy", component: VacancyComponent, data: { title: "Вакансии" },  },
  {path: "learning", component: LearningComponent, data: {title: "Обучение"}},
  {path: "**", component: LearningComponent, data: {title: "Обучение"}},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
