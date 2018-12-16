import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'Experience',
  templateUrl: './Experience.html',
})
export class ExperienceComponent {
    public constructor(private titleService: Title ) {   this.titleService.setTitle( "Experience - Brand Strategist + Freelance Copywriter + SEO Copywriting" );}
}
