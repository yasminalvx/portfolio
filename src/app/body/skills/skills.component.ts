import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardSkillComponent } from './card-skill/card-skill.component';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { CardModule } from 'primeng/card';

export interface Technology {
  name: string;
  icon: IconName;
  level: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule, CardSkillComponent, CardModule],
})
export class SkillsComponent implements OnInit {
  technologies: Technology[] = [
    {
      name: 'Angular',
      icon: 'angular',
      level: 80,
    },
    {
      name: 'Sass',
      icon: 'sass',
      level: 80,
    },
    {
      name: '.Net',
      icon: 'code',
      level: 40,
    },
    {
      name: 'Git',
      icon: 'git',
      level: 95,
    }
  ];

  technicalsSkills: Technology[] = [
    {
      name: 'UX Design',
      icon: 'paint-brush',
      level: 80,
    },
    {
      name: 'UI Design',
      icon: 'pallet',
      level: 80,
    },
    {
      name: 'Figma',
      icon: 'figma',
      level: 40,
    }
  ];
  constructor() {}

  ngOnInit() {}
}
