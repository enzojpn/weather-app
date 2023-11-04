import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/Weather';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit{

  initialCityNaame = 'Londrina';
  weatherDatas!: WeatherDatas;

  constructor(private wheatherService: WeatherService){}
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityNaame);
  }

  getWeatherDatas(cityName: string): void {
    this.wheatherService.getWeatherDatas(cityName)
    .subscribe({
      next:(response) => {
        response && (this.weatherDatas = response)

        console.log(this.weatherDatas);
      },
      error: (error) => console.log(error),

    });

  }

}
