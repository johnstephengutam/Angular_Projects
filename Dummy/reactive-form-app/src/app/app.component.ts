import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'reactive-form-app';
  userName: string = ''; 
  formdata: any;
   ngOnInit() { 
      this.formdata = new FormGroup({ 
         userName: new FormControl("Tutorialspoint")
      }); 
   } 
   onClickSubmit(data: any) {this.userName = data.userName;}
}
