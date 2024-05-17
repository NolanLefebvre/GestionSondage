import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app.routes';
import { VoterComponent } from './voter/voter.component';

@NgModule({
  declarations: [AppComponent, MainComponent,ConnectionComponent,VoterComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    RouterModule.forRoot([]),
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CommonModule,
    
  ],
  
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
