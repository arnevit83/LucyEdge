import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Brandpurpose',
  templateUrl: './Brandpurpose.html',
})

export class BrandpurposeComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Lucy Edge - Creative Brand Strategist and Strategic Copywriter" );
    this.meta.updateTag({ name: 'description', content: 'I am both a brand strategist and freelance copywriter - I think commercially and creatively. My brand skills include customer insight, branding, brand positioning and brand purpose. My copy skills include SEO copywriting, website copywriting, content marketing and tone of voice.' });
    this.meta.updateTag({ name: 'keywords', content: 'Copywriter,Freelance copywriter,Website copywriter,SEO copywriting,Brand Strategist,Branding,Customer Insight' });
  }
}
