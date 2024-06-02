import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardTimelineComponent } from '../../../components/card-timeline/card-timeline.component';

export interface EventItem {
  status?: string;
  title?: string;
  description?: string;
  align?: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  standalone: true,
  imports: [CommonModule, TimelineModule, CardTimelineComponent],
})
export class WorkComponent implements OnInit {
  events: EventItem[];

  constructor() {
    this.events = [
      {
        status: '2024',
        title: 'Minsait - Angular Developer',
        description:
          "Angular Developer at Minsait, a company of Indra. I work in the development of a web application for the management of the company's projects. I use Angular, PrimeNG, and Java Spring Boot.",
          align: 'right'
      },
      {},
    ];
  }
  ngOnInit() {}
}
