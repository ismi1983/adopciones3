import { Component, OnInit } from "@angular/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  faBars = faBars;
  faFacebook = faFacebookF;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  constructor() {}

  ngOnInit() {}
}
