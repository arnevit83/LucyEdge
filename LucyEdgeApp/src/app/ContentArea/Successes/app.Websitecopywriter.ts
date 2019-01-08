import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Websitecopywriter',
  templateUrl: './Websitecopywriter.html',
})

export class WebsitecopywriterComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Copywriter with Extensive Website Copywriter Experience" );
    this.meta.updateTag({ name: 'description', content: 'I have extensive experience as a website copywriter. It all started with YogaClicks – the online yoga shop I founded. As a digital copywriter I have taken on a wide range of tasks from SEO copywriting to copywriting Facebook ads to email copywriting and content marketing.' });
    this.meta.updateTag({ name: 'keywords', content: 'Copywriter,Digital copywriter,Website copywriter,Copywriting Facebook ads,Email copywriting,SEO copywriting' });
  }
}
