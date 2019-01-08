import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Yogaschooldropout',
  templateUrl: './Yogaschooldropout.html',
})

export class YogaschooldropoutComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Best yoga books – yoga memoir Yoga School Dropout" );
    this.meta.updateTag({ name: 'description', content: 'Yoga School Dropout is author Lucy Edge’s first yoga book; a search for spiritual riches in India (Ebury Press). “Neither boringly cynical nor stupidly gullible, she’s open minded, warm & funny; even – though she’d be the last person to claim this – rather wise.” The Independent on Sunday, Books of the Year' });
    this.meta.updateTag({ name: 'keywords', content: 'Yoga book,Best yoga books,Yoga memoirs,Yoga School Dropout,Author' });
  }
}
