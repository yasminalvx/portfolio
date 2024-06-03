import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SocialMediasComponent } from '../../../components/social-medias/social-medias.component';
import { portfolioEn } from '../../data/portfolio-data';
import { ContentPortfolio } from '../../models/content-portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule, SocialMediasComponent],
})
export class HomeComponent {
  public portfolio: ContentPortfolio = portfolioEn;

}
