import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Brandpositioning',
  templateUrl: './Brandpositioning.html',
})

export class BrandpositioningComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Expert Brand Strategist with Extensive Brand Positioning Experience  " );
    this.meta.updateTag({ name: 'description', content: 'As a Brand Strategist my work almost always includes brand positioning. I’ve created brand positioning maps for cat food and brand positioning statements for the Royal Navy, E4 and McDonald’s. I have also created the brand positioning strategy for my start up YogaClicks – a challenging job in a crowded market.' });
    this.meta.updateTag({ name: 'keywords', content: 'Brand strategist,Brand positioning,Brand positioning map,Brand positioning statement,Brand positioning strategies' });
  }
}
