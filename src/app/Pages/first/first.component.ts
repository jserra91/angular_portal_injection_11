import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentPortal, DomPortal, Portal } from '@angular/cdk/portal';
import { CountryServiceService } from 'src/app/Services/country-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements AfterViewInit {

  @ViewChild('virtualContainer', { read: ViewContainerRef })
  virtualContainer!: ViewContainerRef;
  service;

  constructor(private country: CountryServiceService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) {

    this.service = this.country.getService();
  }

  ngAfterViewInit(): void {
    const componentFactory = this.componentFactoryResolver.
      resolveComponentFactory(this.service.getDashboard());
    const componentRef = this.virtualContainer.createComponent<any>(
      componentFactory,
      undefined,
      this.virtualContainer.injector
    );
    // (componentRef.instance as <Component type> Component).task = task; // pass parameters
  }
}
