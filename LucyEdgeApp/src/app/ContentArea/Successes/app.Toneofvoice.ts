import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Toneofvoice',
  templateUrl: './Toneofvoice.html',
})

export class ToneofvoiceComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Freelance Copywriter with Extensive Tone of Voice Experience" );
    this.meta.updateTag({ name: 'description', content: 'I use my expertise as a brand strategist and copywriter to create tone of voice guidelines that are both strategically and creatively on point – that have style and spark and get your brand noticed for all the right reasons. I’ve created the tone of voice for a range of brands – from Grayling PR to Body Positive Works.' });
    this.meta.updateTag({ name: 'keywords', content: 'Tone of voice,Tone of voice guidelines,Brand tone of voice' });
  }
}
