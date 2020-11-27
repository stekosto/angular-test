import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { ContactmeComponent } from './contactme/contactme.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
