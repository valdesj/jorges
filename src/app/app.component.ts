import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: any
  constructor(public httpClient: HttpClient) { }
  fetchDataFromServer() {
    let results = this.httpClient.get('/api/users/valdesj').subscribe((res) => {
      this.title = res
    });
  }
}