import { Component } from "@angular/core";

@Component({
  selector: "learning",
  templateUrl: "./learning.component.html",
  styleUrls: ["./learning.component.css"]
})
export class LearningComponent {


  items = [
    {
      "title": "Debug",
      "about" : "Lorem ipsum dolor sit aestiae nisi optio quas, quibusdam quidem quos repellendus, tempore vel voluptatem."
    },
    {
      "title": "Dev",
      "about" : "Lorem ipsum dolor sit aestiae nisi optio quas, quibusdam quidem quos repellendus, tempore vel voluptatem."
    },
    {
      "title": "Test",
      "about" : "Lorem ipsum dolor sit aestiae nisi optio quas, quibusdam quidem quos repellendus, tempore vel voluptatem."
    },
    {
      "title": "Learn",
      "about" : "Lorem ipsum dolor sit aestiae nisi optio quas, quibusdam quidem quos repellendus, tempore vel voluptatem."
    }
  ];

}
