import { Injectable } from '@angular/core';
import { EnglishComponent } from 'src/app/Pages/english/english.component';
import { BaseAbstract } from '../base/base.abstract';

@Injectable({
  providedIn: 'root'
})
export class EnglishService implements BaseAbstract {

  getDashboard(): any {
    return EnglishComponent;
  }
}
