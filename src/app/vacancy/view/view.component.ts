import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {VacancyItem} from "../../shared/vacancy-item";
import {items} from "../../shared/data";

@Component({
  selector: "view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"],
  animations: [
    trigger("dialog", [
      transition("void => *", [
        style({ transform: "scale3d(.3, .3, .3)" }),
        animate(300)
      ]),
      transition("* => void", [
        animate(300, style({ transform: "scale3d(.0, .0, .0)" }))
      ])
    ])
  ],
  exportAs: "viewController"
})
export class ViewComponent {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() item: VacancyItem;



  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {}

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.router.navigate(["/vacancy"], { queryParams: { } });
  }

  viewContent(): boolean {
    if (this.visible) {
      const itemId = this.activatedRoute.snapshot.queryParams["item"];
      this.item = items[itemId - 1];
    }
    return this.visible;
  }

}
