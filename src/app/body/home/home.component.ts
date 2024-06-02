import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

type SocialMedia = {
  name: string,
  icon: string,
  url: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule],
})
export class HomeComponent implements OnInit {

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
