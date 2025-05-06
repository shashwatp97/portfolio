import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechStack {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  isDarkTheme = false;

  techStack: TechStack[] = [
    { name: 'Angular', icon: 'assets/tech/angular.svg' },
    { name: 'TypeScript', icon: 'assets/tech/typescript.svg' },
    { name: 'Node.js', icon: 'assets/tech/nodejs.svg' },
    { name: 'Spring', icon: 'assets/tech/spring.svg' }
  ];

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme');
  }
}
