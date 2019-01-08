import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Inspo',
  templateUrl: './Inspo.html',
})
export class InspoComponent {

  public constructor(private titleService: Title, private meta: Meta  ) {
     this.titleService.setTitle( "Inspiring Brand Strategy and Copywriting Quotes by Seth Godin and More" );
     this.meta.updateTag({ name: 'description', content: 'Some of my favourite brand strategy and copywriting quotes from Simon Sinek, Seth Godin, Maya Angelou and more. On branding, brand purpose, customer insight, SEO copywriting, content marketing, tone of voice and more.' });
     this.meta.updateTag({ name: 'keywords', content: 'Brand Strategy,Copywriting,Branding,Brand Purpose,Customer Insight,SEO Copywriting,Content Marketing,Tone of Voice,Website Copywriter' });
   }
}
