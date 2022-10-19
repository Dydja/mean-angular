import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  data: any;
  constructor(private dataServices: ServicesService) {}

  ngOnInit(): void {}

  getContinentsSearch(name: any) {
    const keyword = name.target.value;
    const search = this.dataServices
      .getSearch(keyword)
      .then((response: any) => {
        this.data = response;
        console.log(this.data);
      });
  }
}
