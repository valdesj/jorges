import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.groups = this.getContacts()
      .filter(c => c.group != "Ungrouped");

<<<<<<< HEAD
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

  loadSelected(toLoad) {
    for (var i = 0; i < this.groups.length; i++) {
      if ((this.groups[i].group) == toLoad) {
        this.group = (this.groups[i])
      }
    }
    console.log(this.group)
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
=======
    this.groups.push({
      group: "Add new group",
      people: []
    })

    this.ungroupedContacts = this.getContacts()
      .filter(c => c.group == "Ungrouped")[0].people;
>>>>>>> parent of b39847b... drag drop and create
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
        group: "Friends",
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