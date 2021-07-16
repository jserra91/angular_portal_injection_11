import { Component } from '@angular/core';
import { CountryServiceService } from './Services/country-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private country: CountryServiceService) {
    this.country.init("EN");
  }
  title = 'app-poc';
  mostrar = 0;
}
