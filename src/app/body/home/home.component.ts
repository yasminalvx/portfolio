import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SocialMediasComponent } from '../../../components/social-medias/social-medias.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule, SocialMediasComponent],
})
export class HomeComponent implements OnInit {

 

  constructor() { }

  ngOnInit() {
  }

}
