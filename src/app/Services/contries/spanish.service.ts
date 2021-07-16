import { Injectable } from '@angular/core';
import { SpanishComponent } from 'src/app/Pages/spanish/spanish.component';
import { BaseAbstract } from '../base/base.abstract';

@Injectable({
  providedIn: 'root'
})
export class SpanishService implements BaseAbstract {

  getDashboard(): any {
    return SpanishComponent;
  }
}
