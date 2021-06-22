import { Component } from "@angular/core";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "nav",
  templateUrl: "./Nav.html",
})
export class NavComponent {
  faPhone = faPhone;
  faskype = faInstagram;
  faEnvelope = faEnvelope;
  falinkedin = faLinkedin;
  faFacebook = faFacebook;
}
