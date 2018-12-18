import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'Home',
  templateUrl: './Home.html',
})
export class HomeComponent {
    faChevronDown = faChevronDown;
    public constructor(private titleService: Title ) {   this.titleService.setTitle( "Brand Strategist + Freelance Copywriter + SEO Copywriting" );}
}
