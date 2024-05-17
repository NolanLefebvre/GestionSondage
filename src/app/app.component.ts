import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
//import { Router } from 'express';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'palmodle';

  constructor(private router: Router){}

  redirectToMain():void{
    this.router.navigate(['/main']);
  }

  redirectToConnection():void{
    this.router.navigate(['/connection']);
  }
}
