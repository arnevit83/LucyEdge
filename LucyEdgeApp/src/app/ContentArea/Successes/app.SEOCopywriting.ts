import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'SEOCopywriting',
  templateUrl: './SEOCopywriting.html',
})

export class SEOCopywritingComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Freelance Copywriter with SEO Copywriting Certification" );
    this.meta.updateTag({ name: 'description', content: 'I have 2018 SEO copywriting qualification, which I earned from the prestigious SEO Content Institute founded by Heather Lloyd Martin, the pioneer of SEO copywriting. It marries everything I love about being a brand strategist (objectives, targets, brand positioning) with the creativity of copywriting.' });
    this.meta.updateTag({ name: 'keywords', content: 'Copywriter,SEO Copywriting,SEO Web Copywriting,Brand Strategist,Copywriting' });
  }
}
