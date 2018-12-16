import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'Skills',
  templateUrl: './Skills.html',
})

export class SkillsComponent {
  public constructor(private titleService: Title ) {   this.titleService.setTitle( "Skills - Brand Strategist + Freelance Copywriter + SEO Copywriting" );}
}
