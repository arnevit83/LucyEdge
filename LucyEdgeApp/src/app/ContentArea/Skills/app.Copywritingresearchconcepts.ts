import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Copywritingresearchconcepts',
  templateUrl: './Copywritingresearchconcepts.html',
})

export class CopywritingresearchconceptsComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Expert Copywriter with Extensive Research Concepts Experience" );
    this.meta.updateTag({ name: 'description', content: 'As both a brand strategist and copywriter I develop product and brand concepts for research that are both strategically and creatively on point. Working as a freelance copywriter I have created many over the years – from product concepts for Premier Foods and Kallo, to brand concepts for Lily’s Kitchen and Dulux.' });
    this.meta.updateTag({ name: 'keywords', content: 'Brand Strategist,Copywriter,Freelance Copywriter' });
  }
}
