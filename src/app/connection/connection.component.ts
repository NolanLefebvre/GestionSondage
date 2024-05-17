import { Component, OnInit } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutComponent } from '../layout/layout.component';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import {RouterModule} from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [
    HttpClientModule,
    InputTextModule, 
    PasswordModule, 
    LayoutComponent, 
    ButtonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  RouterModule],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css'
})
export class ConnectionComponent implements OnInit {
  email: string = '';
  password: string = '';
  private token!: string;

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.location.reload(); // Actualiser la page lors de la navigation
      }
    });
  }

  loginManually(): void {

    this.email = 'ielosubmarine@lugdunumpalmis.com';
    this.password = 'ielosubmarine';

    this.login();
  }
  refreshPage(): void {
  window.location.reload();
}
  login(): void {
    
    const loginData = { email: this.email, password: this.password };
    this.http.post('http://localhost/api/login', loginData, { responseType: 'text' }).subscribe(
      (response: any) => {
        this.setToken(response);
        console.log('Token reçu :', response);
        this.openSnackBar('Connexion réussie !', 'Fermer');
        this.router.navigate(['/main']);
      },
      (error: any) => {
        console.error('Erreur de connexion :', error);
        this.openSnackBar('Erreur de connexion : ' + error.message, 'Fermer');
      }
    );
    
  }

  setToken(token: string): void {
    sessionStorage.setItem("token", token);
  }

  getToken(): string| null {
    return sessionStorage.getItem("token");
  }

  supprToken(): void {
    sessionStorage.removeItem("token");
}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000, // Durée d'affichage du message (en millisecondes)
    });
  }

}
