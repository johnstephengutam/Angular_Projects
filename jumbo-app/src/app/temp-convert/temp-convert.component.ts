import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temp-convert.component.html',
  styleUrl: './temp-convert.component.css'
})
export class TempConvertComponent {
  cel: number|null=null;
  fah: number|null=null;

  toFahrenheit(cel: number){
    this.fah = (cel*9/5)+32;
  }

  toCelcius(fah: number){
    this.cel = (fah - 32) *5/9;
  }
  
}
