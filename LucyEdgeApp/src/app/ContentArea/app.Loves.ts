import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';


@Component({
  selector: 'Loves',
  templateUrl: './Loves.html',
})

export class LovesComponent {
  public constructor(private titleService: Title, private meta: Meta ) {

    this.titleService.setTitle( "What Lucy Edge Loves, Apart From Brand Strategy and SEO Copywriting" );
  this.meta.updateTag({ name: 'description', content: 'Life isn’t just about brand strategy and SEO copywriting. These are a few of my favourite things – from yoga to running, a good book to New Vogue, the V&A to Southwold.' });
  this.meta.updateTag({ name: 'keywords', content: 'Brand strategy,SEO Copywriting' });
}
}
