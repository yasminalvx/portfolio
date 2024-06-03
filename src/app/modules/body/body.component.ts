import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent
  ],
})
export class BodyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
