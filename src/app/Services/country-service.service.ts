import { Injectable } from '@angular/core';
import { BaseAbstract } from './base/base.abstract';
import { EnglishService } from './contries/english.service';
import { FrenchService } from './contries/french.service';
import { SpanishService } from './contries/spanish.service';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  service: BaseAbstract | undefined;

  constructor() { }

  public init(country: string): any {
    if (country === "ES") {
      this.service = new SpanishService();
    }
    if (country === "EN") {
      this.service = new EnglishService();
    }
    if (country === "FR") {
      this.service = new FrenchService();
    }
  }

  getService(): any {
    return this.service;
  }
}
