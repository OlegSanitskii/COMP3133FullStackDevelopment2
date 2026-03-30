import { Component } from '@angular/core';
import { HerosComponent } from './heros/heros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HerosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}