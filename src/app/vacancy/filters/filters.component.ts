import {Component} from "@angular/core";
import { NouisliderModule } from "ng2-nouislider";

@Component({
  moduleId: module.id,
  selector: "filters-vacancy",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.css"]
})

export class FiltersComponent {
  showOptions = true;
  sex = [
    "Мужской", "Женский"
  ];


  sexSelect = "Выберите пол";
  sphereSelect = "Выберите сферу";
  typeVacancySelect = "Выберите тип";


  viewOptions(view, tag) {
    if (view) {
      tag.children[1].children[0].setAttribute("style", "overflow:visible; height: auto;");
    } else {
      tag.children[1].children[0].setAttribute("style", "overflow:none;");
    }
    this.showOptions = !view;
  }

  choseSphere(filter, tag) {
    this.sphereSelect = filter;
    this.viewOptions(false, tag);
  }

  choseTypeVacancy(filter, tag) {
    this.typeVacancySelect = filter;
    this.viewOptions(false, tag);
  }

  choseSex(filter, tag) {
    this.sexSelect = filter;
    this.viewOptions(false, tag);
  }

}
