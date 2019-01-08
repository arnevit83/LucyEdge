import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Brandpurpose',
  templateUrl: './Brandpurpose.html',
})

export class BrandpurposeComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Expert Brand Strategist with Extensive Brand Purpose Experience" );
    this.meta.updateTag({ name: 'description', content: 'As a Brand Strategist my work almost always includes brand purpose. Why brands do what they do is as important as what they do and how they do it. Whether I am working on cat food or germ kill I always ask this question and make sure we have the answers we need to create customer trust and engagement.' });
    this.meta.updateTag({ name: 'keywords', content: 'Brand strategist,Brand purpose,Brand purpose workshop,Brands with a social purpose' });
  }
}
