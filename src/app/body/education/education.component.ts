import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardTimelineComponent } from '../../../components/card-timeline/card-timeline.component';
import { EventItem } from '../work/work.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
  imports: [CommonModule, TimelineModule, CardTimelineComponent],
})
export class EducationComponent {
  events: EventItem[];

  constructor() {
    this.events = [
      {
        status: '2023-2025',
        title: 'Estácio - Sistemas para Internet',
        description:
          "I'm studying Systems for Internet at Estácio. I'm learning about web development, mobile development, and software engineering.",
        align: 'left',
      },
      {},
    ];
  }
}
