import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import * as data from '../../../data/cities.json'
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { setupCache } from 'axios-cache-adapter'
import { Weather } from 'src/app/model/weather';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {

  weatherDetails: any[] = [];
  apiBase: string;
  apiKey:string;

  constructor() {
    this.apiBase=environment.baseUrl;
    this.apiKey=environment.apiKey;
   }

  ngOnInit(): void {
    this.getWeatherDetails();
  }

  getWeatherDetails(){
    data.List.forEach(element => {
      let cityid=element.CityCode;
      const cache = setupCache({
        // cache max age 5min
        maxAge: 5 * 60 * 1000
      });
      const api = axios.create({
        adapter: cache.adapter
      })
      api({
        url: this.apiBase + 'id=' + cityid + '&appid='+ this.apiKey,
        method: 'get'
      }).then(async (res) => {
        let weatherDetailRow = new Weather(
          res.data.sys.id,
          res.data.name,
          res.data.main.temp,
          res.data.weather[0].description,
        );
        
        this.weatherDetails.push(weatherDetailRow);
      })
    });
  }

}
