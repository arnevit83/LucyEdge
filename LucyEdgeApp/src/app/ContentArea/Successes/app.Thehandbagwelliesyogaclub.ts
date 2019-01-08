import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Thehandbagwelliesyogaclub',
  templateUrl: './Thehandbagwelliesyogaclub.html',
})

export class ThehandbagwelliesyogaclubComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Best yoga books - yoga memoir The Handbag & Wellies Yoga Club" );
    this.meta.updateTag({ name: 'description', content: 'The Handbag and Wellies Yoga Club is author Lucy Edge’s second yoga book; a search for friendship and fertility in the lotus position (Ebury Press). “It made me laugh, it made me feel sad, but ultimately it left me feeling uplifted – reminded of the healing power of yoga, friendship and love.” S. Sherriff' });
    this.meta.updateTag({ name: 'keywords', content: 'Yoga book,Yoga memoir,Author,Best yoga books' });
  }
}
