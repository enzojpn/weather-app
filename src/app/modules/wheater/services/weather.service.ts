import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apikey = '58422623cb89f93ce07859fdf6615a9f';

  //private apiKey = '6382bcc26479515eedc5eecb7474992f';


  constructor(private http: HttpClient) { }


  getWeatherDatas(cityName : string) : Observable<any>{

    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${this.apikey}`,{})
  }
}
