import { Component, AfterViewInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const element = document.querySelector('#carouselExampleCaptions');
    if (element) {
      new bootstrap.Carousel(element, {
        interval: 3000,
        ride: 'carousel'
      });
    }
  }
}
