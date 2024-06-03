import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { portfolioEn } from '../../../data/portfolio-data';
import { ContentPortfolio } from '../../../models/content-portfolio';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, ButtonModule],
})
export class ProjectsComponent {
  public portolio: ContentPortfolio = portfolioEn;
}
