import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { portfolioEn } from '../../data/portfolio-data';
import { ContentPortfolio } from '../../models/content-portfolio';
import { CardSkillComponent } from './card-skill/card-skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule, CardSkillComponent, CardModule],
})
export class SkillsComponent {
  public portolio: ContentPortfolio = portfolioEn;
}
