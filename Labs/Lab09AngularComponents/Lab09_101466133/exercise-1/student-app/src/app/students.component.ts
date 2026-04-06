import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  template: `
    <h1>{{ getTitle() }} - {{ getCurrentDate() }}</h1>
  `
})
export class StudentsComponent {
  title: string = 'Students Component Works';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toLocaleString();
  }
}