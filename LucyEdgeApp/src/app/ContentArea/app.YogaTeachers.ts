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
    this.meta.updateTag({ name: 'keywords', content: 'Yoga market research,Yoga content writer,How to market a yoga studio,Marketing yoga classes,Yoga marketing strategies,How to market yourself as a yoga instructor,Yoga studio marketing plan,How to market a yoga retreat,Marketing for yoga teachers,Yoga marketing agency' });
  }
}
