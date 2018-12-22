import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Clients',
  templateUrl: './Clients.html',
})
export class ClientsComponent {
    public constructor(private titleService: Title, private meta: Meta ) {
    this.titleService.setTitle( "Clients - Brand Strategist + Freelance Copywriter + SEO Copywriting" );
    this.meta.updateTag({ name: 'description', content: 'I am a Brand Strategist and Freelance Copywriter with SEO Copywriting qualifications. I write on point brand stories to engage customers and convert to sales.' });
    this.meta.updateTag({ name: 'keywords', content: '' });}
}
