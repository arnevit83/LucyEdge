import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'Interests',
  templateUrl: './Interests.html',
})
export class InterestsComponent {
  public constructor(private titleService: Title ) {   this.titleService.setTitle( "Interests - Brand Strategist + Freelance Copywriter + SEO Copywriting" );}
}
