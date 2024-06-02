import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';


interface SocialMedia {
  name: string,
  icon: string,
  url: string,
}

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule]
})
export class SocialMediasComponent implements OnInit {

  socialMedias: SocialMedia[] = [
    { name: 'LinkedIn', icon: 'pi pi-linkedin', url: ''},
    { name: 'GitHub', icon: 'pi pi-github', url: ''},
    { name: 'Twitter', icon: 'pi pi-twitter', url: ''},
    { name: 'Instagram', icon: 'pi pi-instagram', url: ''},

  ]
  constructor() { }

  ngOnInit() {
  }

}
