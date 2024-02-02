import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExponentialStrengthPipe } from './prueba.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ExponentialStrengthPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'actividad_3';

  name: string = 'Jesus';
  lastname: string = 'Garizao';
  mydate: Date = new Date(2003, 11, 11);

  myedad: number = 25.4444444;

  mymoney: string = '1000';

  mytime: number = 0.1;

  object: Object = {
    name: 'Jesus',
    lastname: 'Garizao',
    mydate: '2003- 11- 11',
  };
}
