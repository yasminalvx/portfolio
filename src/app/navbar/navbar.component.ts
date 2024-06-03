import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { ContentPortfolio } from '../models/content-portfolio';
import { BtnSwitcherThemeComponent } from './btn-switcher-theme/btn-switcher-theme.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TabMenuModule,
    BtnSwitcherThemeComponent,
  ],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem | undefined;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    if (!document) return;
    let elementPosition =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1;
    const sectionsStr = this.items?.map((x) => x.id!.replace('item-', ''));
    const sections = sectionsStr?.map((section: string) => ({
      height: document.getElementById(section)?.offsetTop ?? 0,
      name: section,
    }));
    sections.sort((a, b) => b.height - a.height);
    const sectionActive = sections.find((x) => x.height <= elementPosition);
    this.activeItem = this.items?.find(
      (x) => x.id === `item-${sectionActive?.name}`
    );
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        id: 'item-home',
        command: () => this.scrollTo('home'),
      },
      {
        label: 'Skills',
        id: 'item-skills',
        command: () => this.scrollTo('skills'),
      },
      {
        label: 'Projects',
        id: 'item-projects',
        command: () => this.scrollTo('projects'),
      },
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
