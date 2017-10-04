import {Component, OnInit} from "@angular/core";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: "carouse",
  templateUrl: "./carouse.component.html",
  styleUrls: ["./carouse.component.css"],
  animations: [
    trigger("flyInOut", [
      transition("true => false", [
        style({transform: "translateX(-100%)"}),
        animate(1000)
      ]),
      transition("false => true", [
        style({transform: "translateX(100%)"}),
        animate(1000)
      ])
    ])
  ]
})

export class CarouseComponent implements OnInit {
  image: String[] = [
    "assets/img/1.png",
    "assets/img/2.png"
  ];
  showDiv = "true";
  subscription: any;
  time = 0;
  url: string;
  ngOnInit() {
    const timer = TimerObservable.create(0, 5000);
    const timer1 = TimerObservable.create(0, 5000);
    timer1.subscribe(t => {
      this.showDiv = this.showDiv === "true" ? "false" : "true";
    });
    this.subscription = timer.subscribe(t => {
      this.url =  `url(${this.image[this.time++]})`;
      this.time > 1 ? this.time = 0 : null;
    });
  }
}
