import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  users: any
  userInfo: any

  constructor(public httpClient: HttpClient) { }

  ngOnInit(){
    let results = this.httpClient.get('/api/users').subscribe((res) => {
      this.users = res;
    })
  }

  public requestUser(data){
    // let userInfo = this.httpClient.get('/api/users/' + userToLoad).subscribe((res) =>{
    //   this.userInfo = res;
    // })
    console.log(data)
  }
}