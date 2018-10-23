import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Route Editor';

  groups = [];
  ungroupedContacts = [];

  constructor() {
    this.groups = this.getContacts()
      .filter(c => c.group != "Ungrouped");
    this.ungroupedContacts = this.getContacts()
      .filter(c => c.group == "Ungrouped")[0].people;
  }

  checkIfGroupExists(nameToCheck){
    var exists
    for (var i = 0; i < this.groups.length; i++){
      if((this.groups[i].group) == nameToCheck) {
        exists = false
        return exists
      } else {
        exists = true
      }
    }
    return exists
  }

  public addGroup(newGroupName) {
    if (this.checkIfGroupExists(newGroupName)){
      this.groups.push({
        group: newGroupName,
        people: []
      })
    } else {
      alert("Group already exists!!")
    }
  }

  public onAdd(args, item) {
    console.log("Added")
    if (item.group == "Add new group") {
      item.group = item.people + args.dataItem.name + "'s Group"
      this.groups.push({
        group: "Add new group",
        people: []
      })
    }
  }

  private getContacts() {
    return [ 
      {
        group: "Mond",
        people: [
          {
            id: 6,
            name: "Todd Motto",
            location: "London"
          },
          {
            id: 9,
            name: "Ed Charbeneau",
            location: "Louisville"
          }
        ]
      },
      {
        group: "Tues",
        people: [
        ]
      },
      {
        group: "Wed",
        people: [
        ]
      },
      {
        group: "Teams",
        people: [
          {
            id: 3,
            name: "Mary Jane",
            location: "Sofia"
          },
          {
            id: 4,
            name: "Linda Belcher",
            location: "Orlando"
          }
        ]
      },
      {
        group: "Ungrouped",
        people: [
          {
            id: 1,
            name: "Sarah Smith",
            location: "New York"
          },
          {
            id: 2,
            name: "Ron Burgundy",
            location: "Boston"
          },
          {
            id: 5,
            name: "Morty Smith",
            location: "Boston"
          },
          {
            id: 7,
            name: "Rick Sanchez",
            location: "Boston"
          }
        ]
      }
    ];
  }
}