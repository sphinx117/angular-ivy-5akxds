import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, UsersComponent, ProfileComponent],
  
  bootstrap: [AppComponent],
  providers: [{ provide: 'apiUrl', useValue: 'https://reqres.in/api' }],
})
export class AppModule {}
