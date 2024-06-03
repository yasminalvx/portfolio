import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

interface SocialMedia {
  name: string;
  icon: string;
  url: string;
  target?: string;
}

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule],
})
export class SocialMediasComponent {
  socialMedias: SocialMedia[] = [
    { name: 'LinkedIn', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/yasminalvesh/' },
    { name: 'GitHub', icon: 'pi pi-github', url: 'https://github.com/yasminalvx' },
    { name: 'Gmail', icon: 'pi pi-at', url: 'mailto:yasminalves.developer@gmail.com', target: '_self'},
  ];
}
