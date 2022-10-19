import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}
  getSearch(name: string) {
    const response = new Promise((resolve) => {
      this.http.get(environment.base_Url + `search?s=${name}`).subscribe(
        (data: any) => {
          resolve(data);
        },
        (err: any) => {
          console.log(err);
        }
      );
    });

    return response;
  }
}
