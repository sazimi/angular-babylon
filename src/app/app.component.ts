import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  snow: string =
    "https://raw.githubusercontent.com/anacidre/angular-babylonjs/master/src/assets/textures/flare.png";
  ground: string =
    "https://raw.githubusercontent.com/anacidre/angular-babylonjs/master/src/assets/textures/distortion.png";
  wrap: string =
    "https://static.vecteezy.com/system/resources/thumbnails/000/139/454/small/red-christmas-fabric-vector-pattern.jpg";
}
