import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'Contact',
  templateUrl: './Contact.html',
})

export class ContactComponent {

  faPhone = faPhone;
  faskype = faSkype;
  faEnvelope = faEnvelope;
  falinkedin = faLinkedin;
  public constructor(private titleService: Title , private meta: Meta) {
     this.titleService.setTitle( "Brand Strategist and Freelance Copywriter London and Norwich" );
     this.meta.updateTag({ name: 'description', content: 'I work as a brand strategist and freelance copywriter in London and from my office in Norwich. Email me or give me a call to discuss your project. My skills cover the whole brand identity process – from customer insight and branding to creating your tone of voice and spreading your brand idea.' });
     this.meta.updateTag({ name: 'keywords', content: 'Brand Strategist,Freelance Copywriter London,Brand Identity,Customer Insight,Branding,Tone of Voice,Brand Idea' });
   }
}
