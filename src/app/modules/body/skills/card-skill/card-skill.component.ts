import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  IconName,
  faAngular,
  faFigma,
  faSass
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faPaintBrush, faPalette } from '@fortawesome/free-solid-svg-icons';
import { ProgressBarModule } from 'primeng/progressbar';

export interface Technology {
  name: string;
  icon: IconName;
  level: number;
}

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
    const technologyIcons: {[key: string]: IconDefinition} = {
      'angular': faAngular,
      'sass': faSass,
      'figma': faFigma,
      'palette': faPalette,
      'paint-brush': faPaintBrush,
    };

    return technologyIcons[this.technology.icon] || faCode;
  }
}
