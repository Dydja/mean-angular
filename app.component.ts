import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'first-app';
  data: any;
  constructor(private dataServices: ServicesService) {}

  ngOnInit(): void {}

  getContinentsSearch(name: any) {
    const keyword = name.target.value;
    //console.log(keyword);
    const search = this.dataServices
      .getSearch(keyword)
      .then((response: any) => {
        this.data = response;
        console.log(this.data);
      });
  }
}
