import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
declare var google;

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  
  @ViewChild("map", {static: false}) element: ElementRef;
  map: any;

  constructor() { }

  ngOnInit(): void { 
    console.log(this.initMap());
    this.initMap();
  }

  initMap(): void {
    this.map = new google.maps.Map(
      this.element.nativeElement, 
      {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
  
}
