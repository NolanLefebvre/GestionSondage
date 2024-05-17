import { Component,ViewChild,OnInit,Output, EventEmitter } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  title = 'palmodle';
  isLoggedIn: boolean = false;
  isLoggedOut: boolean = true;
  constructor(private router: Router){}

  ngOnInit(): void {
    this.isLoggedIn = !!this.getToken();
    this.isLoggedOut = !this.isLoggedIn;
    this.tokenRemoved.subscribe(() => {
      this.updateLoggedInState();
    });
}
  getToken(): string| null {
    return sessionStorage.getItem("token");
  }
  @Output() tokenRemoved: EventEmitter<void> = new EventEmitter<void>();
  supprToken(): void {
    sessionStorage.removeItem("token");
    this.tokenRemoved.emit(); 
  }

  redirectToMain():void{
    this.router.navigate(['/main']);

  }

  redirectToConnection():void{
    this.router.navigate(['/connection']);
    
  }
  updateLoggedInState(): void {
    this.isLoggedIn = !!this.getToken();
    this.isLoggedOut = !this.isLoggedIn; 
    
  }

  logout(): void {
    this.supprToken();
    this.updateLoggedInState();
    this.router.navigate(['/connection']);
}


}