import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserInfoModal } from './user/user.component'

@NgModule({
  declarations: [AppComponent, DashboardComponent, UserComponent, UserInfoModal],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  entryComponents: [ UserInfoModal ],
  bootstrap: [AppComponent]
})
export class AppModule {}