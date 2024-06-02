import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  standalone: true,
  imports: [
    CommonModule, HomeComponent
  ],
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
