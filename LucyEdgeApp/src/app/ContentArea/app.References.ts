import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'References',
  templateUrl: './References.html',
})

export class ReferencesComponent {
  public constructor(private titleService: Title ) {   this.titleService.setTitle( "References - Brand Strategist + Freelance Copywriter + SEO Copywriting" );}
}
