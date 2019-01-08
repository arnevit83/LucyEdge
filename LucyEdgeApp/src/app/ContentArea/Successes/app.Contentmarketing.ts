import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Contentmarketing',
  templateUrl: './Contentmarketing.html',
})

export class ContentmarketingComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Freelance Copywriter with Extensive Content Marketing Experience" );
    this.meta.updateTag({ name: 'description', content: 'I will use my expertise as a brand strategist and copywriter to create a content marketing strategy for your brand that is both creative and strategic, connecting with your target customer to drive profit. My SEO content writing expertise helps me to write the website content that will engage your customers.' });
    this.meta.updateTag({ name: 'keywords', content: 'Content marketing,Content marketing strategy,Website content writer,SEO content writing,Freelance content writer' });
  }
}
