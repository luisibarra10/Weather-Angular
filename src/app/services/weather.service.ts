import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI: string;
  apiKey = 'fcceacbce9b7ec5b4cd056baa7d4ee98';
  
  constructor(private http: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`
  }

  getWeather(cityName: string){
    return this.http.get(`${this.URI}${cityName}`);
  }
}
