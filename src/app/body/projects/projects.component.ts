import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, ButtonModule],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor() {}

  ngOnInit() {
    this.projects = [
      {
        name: 'Portfolio',
        description:
          'This is my portfolio. It is a web application developed with Angular and PrimeNG.',
        technologies: ['Angular', 'PrimeNG'],
        url: '',
      },
      {
        name: 'Angular PrimeNG',
        description:
          'This is a web application developed with Angular and PrimeNG.',
        technologies: ['Angular', 'PrimeNG'],
        url: '',
      },
      {
        name: 'Angular PrimeNG',
        description:
          'This is a web application developed with Angular and PrimeNG.',
        technologies: ['Angular', 'PrimeNG'],
        url: '',
      },
      {
        name: 'Angular PrimeNG',
        description:
          'This is a web application developed with Angular and PrimeNG.',
        technologies: ['Angular', 'PrimeNG'],
        url: '',
      },
    ];
  }
}
