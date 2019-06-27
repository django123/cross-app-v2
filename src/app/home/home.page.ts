import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public contact = {
    name: "JAS",
    email: "jean.edouga@jassarl.com",
    tel: "676344842",
    logo: "assets/images/logo.PNG",
    location: "assets/images/location.PNG"
  }

}
