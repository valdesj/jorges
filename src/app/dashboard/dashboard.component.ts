import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Route Editor';
  group = [];
  groups = [];
  contactGroup = [];
  ungroupedContacts = [];
  sortbales:any;

  constructor(public httpClient: HttpClient) { }

  ngOnInit( ) {
    let connection = this.httpClient.get('/api/users').subscribe((res) => { 
        this.sortbales = res;
    })

    this.sortbales.array.forEach(element => {
      element.array.array.forEach(elements => {
        console.log(element.elements.username)
      });
    });(this.sortbales);
  }


  checkIfGroupExists(nameToCheck) {
    var exists
    for (var i = 0; i < this.groups.length; i++) {
      if ((this.groups[i].group) == nameToCheck) {
        exists = false
        return exists
      } else {
        exists = true
      }
    }
    return exists
  }

  public addGroup(newGroupName) {
    if (this.checkIfGroupExists(newGroupName)) {
      this.groups.push({
        group: newGroupName,
        people: []
      })
    } else {
      alert("Group already exists!!")
    }
  }
}