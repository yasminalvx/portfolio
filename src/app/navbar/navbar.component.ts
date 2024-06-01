import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { BtnSwitcherThemeComponent } from './btn-switcher-theme/btn-switcher-theme.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, TabMenuModule, BtnSwitcherThemeComponent],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', id: 'item-home', command: () => this.scrollTo('home') },
      { label: 'Education', id: 'item-education', command: () => this.scrollTo('education') },
      { label: 'Projects', id: 'item-projects', command: () => this.scrollTo('projects') },
      { label: 'Contact', id: 'item-contact', command: () => this.scrollTo('contact') },
    ];

    this.activeItem = this.items[0];
  }
  
  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
