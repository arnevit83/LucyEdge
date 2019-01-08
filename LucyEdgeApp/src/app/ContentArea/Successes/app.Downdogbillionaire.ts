import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Downdogbillionaire',
  templateUrl: './Downdogbillionaire.html',
})

export class DowndogbillionaireComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Best yoga books - yoga novel Down Dog Billionaire" );
    this.meta.updateTag({ name: 'description', content: 'Down Dog Billionaire is a yoga novel by author Lucy Edge; set in a super luxe yoga studio, this is a heart-warming comedy of errors for any woman balancing bitchy colleagues, crazy friendships and men being men. “This is a witty, very astute and richly imagined portrait of the ‘underbelly’ of the yoga world.” Amanya' });
    this.meta.updateTag({ name: 'keywords', content: 'Yoga book,Author,Yoga novel,Best yoga books' });
  }
}
