import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "vacancy",
  templateUrl: "./vacancy.component.html",
  styleUrls: ["./vacancy.component.css"]
})


export class VacancyComponent implements OnInit {
  title = "title";
  showDialog = false;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.router.snapshot.queryParams["item"] !== "") {
      this.showDialog = true;
    }
  }
}
