import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TempConvertComponent } from './temp-convert/temp-convert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TempConvertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Temperature Converter';
}
