import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'Clients',
  templateUrl: './Clients.html',
})
export class ClientsComponent {
    public constructor(private titleService: Title ) {   this.titleService.setTitle( "Clients - Brand Strategist + Freelance Copywriter + SEO Copywriting" );}
}
