import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngular,
  faFigma,
  faSass
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { ProgressBarModule } from 'primeng/progressbar';
import { Technology } from '../skills.component';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
  styleUrls: ['./card-skill.component.scss'],
  standalone: true,
  imports: [CommonModule, ProgressBarModule, FontAwesomeModule],
})
export class CardSkillComponent {
  @Input() technology!: Technology;

  get icon() {
    switch (this.technology.icon) {
      case 'angular':
        return faAngular;
      case 'sass':
        return faSass;
      case 'figma':
        return faFigma;
      default:
        return faCode;
    }
  }
}
