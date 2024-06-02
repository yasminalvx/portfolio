import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SocialMediasComponent } from '../../components/social-medias/social-medias.component';
import { ButtonModule } from 'primeng/button';
interface Link {
  name: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    CommonModule, SocialMediasComponent, ButtonModule
  ],
})
export class FooterComponent implements OnInit {
    links: Link[] = [
      {
        name: 'FAQ',
        url: 'faq'
      },
      {
        name: 'Services',
        url: 'services'
      },
      {
        name: 'About Me',
        url: 'about'
      },
      {
        name: 'Contact',
        url: 'contact'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
