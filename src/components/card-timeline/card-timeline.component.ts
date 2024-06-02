import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card-timeline',
  templateUrl: './card-timeline.component.html',
  styleUrls: ['./card-timeline.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule]
})
export class CardTimelineComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) align!: string;
}
