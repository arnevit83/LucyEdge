import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'Loves',
  templateUrl: './Loves.html',
})

export class LovesComponent {
  public constructor(private titleService: Title ) {   this.titleService.setTitle( "Loves - Brand Strategist + Freelance Copywriter + SEO Copywriting" );}
}
