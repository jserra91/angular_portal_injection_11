import { Injectable } from '@angular/core';
import { FrenchComponent } from 'src/app/Pages/french/french.component';
import { BaseAbstract } from '../base/base.abstract';

@Injectable({
  providedIn: 'root'
})
export class FrenchService implements BaseAbstract {

  getDashboard(): any {
    return FrenchComponent;
  }
}
