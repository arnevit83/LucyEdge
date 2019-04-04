import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'YogaTeachers',
  templateUrl: './YogaTeachers.html',
})

export class YogaTeachersComponent {
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;
  public constructor(private titleService: Title, private meta: Meta ) {
    this.titleService.setTitle( "How to market yourself as a yoga teacher, or yoga studio" );
    this.meta.updateTag({ name: 'description', content: 'Uncomfortable with marketing yourself as a yoga teacher? Learn to love marketing your yoga classes, differentiate yourself, and find students. Discover the yoga marketing strategies that really work with Lucy Edge, yoga advocate, web copywriter, SEO copywriter, brand strategist & author of Yoga School Dropout.' });
    this.meta.updateTag({ name: 'keywords', content: 'How to market yourself as a yoga teacher,How to market yourself a yoga studio,Yoga marketing strategies,Marketing yoga classes,Marketing for yoga teachers,Marketing yoga,Marketing yoga studio,Yoga marketing,Yoga marketing agency,Yoga marketing ideas,Web copywriter,SEO copywriter,Brand strategist' });
  }
}
