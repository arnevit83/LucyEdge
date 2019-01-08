import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'Testimonials',
  templateUrl: './Testimonials.html',
})
export class TestimonialsComponent {
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;
  public constructor(private titleService: Title, private meta: Meta  ) {
     this.titleService.setTitle( "Highly Recommended Freelance Copywriter and Brand Strategist" );
     this.meta.updateTag({ name: 'description', content: 'Looking for a freelance copywriter or brand strategist? Want to know you’re making the right choice? Hear from some of the CEOs and small business owners I have worked with. Covering both brand strategist and copywriter roles, including branding, customer insight, and SEO copywriting. UK and USA.' });
     this.meta.updateTag({ name: 'keywords', content: 'Brand Strategist,Freelance Copywriter,Branding,Brand Purpose,Customer Insight,SEO Copywriting,Tone of Voice' });
   }
}
