import { Component,OnInit  } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { Sondage } from '../model/sondage';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-main',
  standalone : true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports : [RouterModule,HttpClientModule,CommonModule,LayoutComponent]
})
export class MainComponent implements OnInit{
  sondages: Sondage[] = [];
  token: string | null = null;
  constructor(private http: HttpClient,private router: Router) {}
  ngOnInit(): void {
    this.fetchSondages()
    this.token = sessionStorage.getItem('token');
  }

  fetchSondages(): void {
    this.http.get<any>('http://localhost/api/sondages')
      .subscribe(
        (data) => {
          if (data && data.data && Array.isArray(data.data)) {
            this.sondages = data.data.map((sondage: Sondage, index: number) => {
              sondage.id = index;
              return sondage;
            });
            console.log('Sondages récupérés :', this.sondages);
          } else {
            console.warn('Aucun sondage récupéré.');
          }
        },
        (error) => {
          console.error('Erreur lors de la récupération des sondages :', error);
        }
      );
  }
  
}
