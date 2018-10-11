import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
}) export class UserComponent {
  users: any
  constructor(public httpClient: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    let results = this.httpClient.get('/api/users').subscribe((res) => {
      this.users = res;
    })
  }

  public openDialog(data): void {
    const dialogRef = this.dialog.open(UserInfoModal, {data});
    dialogRef.afterClosed().subscribe(result => {
      //do something when closing
    });
  }
}

@Component({
  selector: 'user-info-modal',
  templateUrl: 'user.data.popup.html',
}) export class UserInfoModal {
  constructor(
    public dialogRef: MatDialogRef<UserInfoModal>,
    @Inject(MAT_DIALOG_DATA) public data) { }
  
  public onNoClick(): void {
    this.dialogRef.close();
    console.log(MAT_DIALOG_DATA)
  }
}