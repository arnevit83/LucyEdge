import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'About',
  templateUrl: './About.html',
})
export class AboutComponent {
      public constructor(private titleService: Title ) {   this.titleService.setTitle( "About - Brand Strategist + Freelance Copywriter + SEO Copywriting");}
}
