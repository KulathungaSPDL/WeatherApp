import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private wheatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'
  private apiKey = '525fd52560ea238b30a6278c9225ecd0'
  private cityId = '1248991'
  WeatherData:any;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {

  }
}
