import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

declare var $:any;

@Component({
  selector: 'Brand Strategy',
  templateUrl: './BrandStrategy.html',
})
export class BrandStrategyComponent {
  public constructor(private titleService: Title, private meta: Meta  ) {
     this.titleService.setTitle( "Brand Strategy - Brand Strategist + Freelance Copywriter + SEO Copywriting" );
     this.meta.updateTag({ name: 'description', content: 'I am a Brand Strategist and Freelance Copywriter with SEO Copywriting qualifications. I write on point brand stories to engage customers and convert to sales.' });
     this.meta.updateTag({ name: 'keywords', content: 'Brand strategist,Branding,Product branding,Corporate branding,Digital branding' });
   }
   ngOnInit() {
     $(function(){
       setTimeout(function() {
         var urlHash = window.location.href.split("#")[2];
         if (urlHash &&  $('#' + urlHash).length )
               $('html,body').animate({
                   scrollTop: $('#' + urlHash).offset().top - 20
               }, 1000);
        });
       }, 500);
}
}
