import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'Home',
  templateUrl: './Home.html',
})
export class HomeComponent {
    faChevronDown = faChevronDown;
    faPhone = faPhone;
    faEnvelope = faEnvelope;
    public constructor(private titleService: Title, private meta: Meta ) {
         this.titleService.setTitle( "Brand Strategist + Freelance Copywriter + SEO Copywriting" );
         this.meta.updateTag({ name: 'description', content: 'I am a Brand Strategist and Freelance Copywriter with SEO Copywriting qualifications. I write on point brand stories to engage customers and convert to sales.' });
         this.meta.updateTag({ name: 'keywords', content: '' });
       }
}
