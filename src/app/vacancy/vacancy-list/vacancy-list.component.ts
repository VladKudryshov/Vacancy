import { Component } from "@angular/core";
import { items } from "../../shared/data";
import {VacancyItem} from "../../shared/vacancy-item";


@Component({
  moduleId: module.id,
  selector: "vacancy-list",
  templateUrl: "./vacancy-list.component.html",
  styleUrls: ["./vacancy-list.component.css"],
})
export class VacancyListComponent {
  vacancy: VacancyItem[] = items;
}
