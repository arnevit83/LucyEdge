import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Customerinsight',
  templateUrl: './Customerinsight.html',
})

export class CustomerinsightComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Expert Brand Strategist with Extensive Customer Insight Experience" );
    this.meta.updateTag({ name: 'description', content: 'As an experienced brand strategist I understand the importance of customer insight and use a myriad of customer insight tools to deepen understanding and engagement. I have conducted ethnographic research on the Sunday Roast, one to ones with Lexus Customer Service reps, and segmentation work for Mecca Bingo.' });
    this.meta.updateTag({ name: 'keywords', content: 'Customer Insight,Importance of Customer Insight' });
  }
}
