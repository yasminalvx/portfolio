import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-btn-switcher-theme',
  templateUrl: './btn-switcher-theme.component.html',
  styleUrls: ['./btn-switcher-theme.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SelectButtonModule],
})
export class BtnSwitcherThemeComponent implements OnInit {
  stateOptions: any[] = [
    { label: 'Light', value: 'light', icon: 'pi pi-sun'},
    { label: 'Dark', value: 'dark', icon: 'pi pi-moon'},
  ];

  value: string = 'dark';
  controlVariable = 'dark';

  ngOnInit(): void {
    this.value = this.colorSchemeSystem;
    this.toggleTheme();
  }

  get isDarkMode() {
    return this.value === 'dark';
  }

  get colorSchemeSystem() {
    if (typeof window === 'undefined' || !window.matchMedia) return 'light';
    return window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  toggleTheme() {
    if (typeof document === 'undefined') return;
    if (!this.value) {
      this.value = this.controlVariable;
      return;
    }
    this.controlVariable = this.value;
    const themeLink = document?.getElementById('app-theme') as HTMLLinkElement;
    if (this.isDarkMode) {
      themeLink.href = 'aura-dark-indigo.css';
    } else {
      themeLink.href = 'aura-light-indigo.css';
    }
  }
}
