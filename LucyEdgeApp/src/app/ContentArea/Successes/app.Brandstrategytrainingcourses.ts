import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Brandstrategytrainingcourses',
  templateUrl: './Brandstrategytrainingcourses.html',
})

export class BrandstrategytrainingcoursesComponent {
  public constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle( "Brand Strategist with Brand Strategy Training Courses Experience" );
    this.meta.updateTag({ name: 'description', content: 'As an experienced Freelance Brand Strategist I am often asked to train other people. I have run brand strategy training courses for lots of organisations – from research companies to ad agencies. I have a unique approach that enables everyone to discover that they are already experienced strategists!' });
    this.meta.updateTag({ name: 'keywords', content: 'Brand strategy training courses,Freelance brand strategist' });
  }
}
