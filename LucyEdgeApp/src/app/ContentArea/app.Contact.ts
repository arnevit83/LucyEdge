import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'Contact',
  templateUrl: './Contact.html',
})

export class ContactComponent {
  public constructor(private titleService: Title ) {   this.titleService.setTitle( "Contact Us - Brand Strategist + Freelance Copywriter + SEO Copywriting" );}
}
