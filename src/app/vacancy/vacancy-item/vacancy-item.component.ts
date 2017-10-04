import {Component, Input} from "@angular/core";
import { VacancyItem } from "../../shared/vacancy-item";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: "vacancy-item",
  templateUrl: "./vacancy-item.component.html",
  styleUrls: ["./vacancy-item.component.css"],
})
export class VacancyItemComponent {
  @Input() item: VacancyItem;
  showDialog = false;
  constructor(
    private router: Router
  ) {}
  goProducts(itemId: string) {
    this.router.navigate(["/vacancy"], { queryParams: { item: itemId } });
  }
}
