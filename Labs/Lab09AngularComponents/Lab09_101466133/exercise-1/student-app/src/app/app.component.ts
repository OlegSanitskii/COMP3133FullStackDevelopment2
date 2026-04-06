import { Component } from '@angular/core';
import { StudentsComponent } from './students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}