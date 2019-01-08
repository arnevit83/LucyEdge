import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Clients',
  templateUrl: './Clients.html',
})
export class ClientsComponent {
    public constructor(private titleService: Title, private meta: Meta ) {
    this.titleService.setTitle( "Big Brand Smarts for Smaller Businesses - Brand Strategy & Copywriting" );
    this.meta.updateTag({ name: 'description', content: 'I combine my expertise as a freelance copywriter, published author and brand strategist to create brand strategies, brand stories and SEO copywriting to grow your business. I cut my teeth as a brand strategist in big ad agencies. Now I specialise in smaller businesses – especially ethical, yoga and wellness brands.' });
    this.meta.updateTag({ name: 'keywords', content: 'Freelance copywriter,Copywriting,Author,Brand strategist,SEO copywriting,Brand strategies,Brand stories,Yoga author,Wellness writer' });}
}
