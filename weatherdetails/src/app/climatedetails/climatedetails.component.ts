import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-climatedetails',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './climatedetails.component.html',
  styleUrl: './climatedetails.component.css'
})
export class ClimatedetailsComponent {
  city = '';
  temp = '';
  wind = '';
  humidity = '';
  result = 'no results';

  apiKey: string = '79525dccaf332808c2e667f9c395f29b';
  apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  cityFound: boolean = true;

  constructor(private http: HttpClient){

  }

  getClimateDetails(city: string){
      this.city = city;

      if(this.city == ''){
        this.cityFound = true;
        this.temp = '';
        this.wind = '';
        this.humidity = '';
      }
      else if(this.city != ''){
        this.fetchWeatherData();
      }else{
        this.cityFound =false;
      }
  }

  fetchWeatherData(){

    const url = `${this.apiUrl}?q=${this.city}&appid=${this.apiKey}&units=metric`;

    console.log(url);
    
    this.http.get(url).subscribe(
      (data: any)=>{
        console.log(data);
        this.temp = data.main.temp;
        this.wind = data.wind.speed;
        this.humidity = data.main.humidity;
        this.cityFound = true;
      }, (error) => {
        console.log("error fetching data");
        this,this.cityFound = false;
      }
    )
  }
}
