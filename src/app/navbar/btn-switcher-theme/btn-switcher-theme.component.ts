import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-btn-switcher-theme',
  templateUrl: './btn-switcher-theme.component.html',
  styleUrls: ['./btn-switcher-theme.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SelectButtonModule],
})
export class BtnSwitcherThemeComponent {
  stateOptions: any[] = [
    { label: 'Light', value: 'light', icon: 'pi pi-sun'},
    { label: 'Dark', value: 'dark', icon: 'pi pi-moon'},
  ];

  value: string = 'dark';

  get isDarkMode() {
    return this.value === 'dark';
  }

  toggleTheme() {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (this.isDarkMode) {
      themeLink.href = 'aura-dark-indigo.css';
    } else {
      themeLink.href = 'aura-light-indigo.css';
    }
  }
}
