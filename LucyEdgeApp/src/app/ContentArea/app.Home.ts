import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'Home',
  templateUrl: './Home.html',
})
export class HomeComponent {
    public constructor(private titleService: Title ) {   this.titleService.setTitle( "Brand Strategist + Freelance Copywriter + SEO Copywriting" );}
}
