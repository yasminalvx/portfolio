import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    if (!document) return;
    let elementPosition = (document.documentElement.scrollTop || document.body.scrollTop) + 1;
    const sectionsStr = ['home', 'work', 'education', 'projects', 'contact'];
    const sections = sectionsStr.map(section => document.getElementById(section)?.offsetTop || 0);
    Object.entries(sections).forEach(([index, section]) => {
      if (elementPosition >= section && (elementPosition < sections[+index + 1] || +index === sections.length - 1)) {
        this.activeItem = this.items?.[+index];
      }
    });
  }

  ngOnInit() {
    this.items = [
      { label: 'Home', id: 'item-home', command: () => this.scrollTo('home') },
      { label: 'Work', id: 'item-work', command: () => this.scrollTo('work') },
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
