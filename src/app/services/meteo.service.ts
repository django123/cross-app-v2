import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient: HttpClient) { }

  public getMeteoData(city:string){
    return this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=ce36cb0f43063633094815a2c7690a6e")
  }
}
