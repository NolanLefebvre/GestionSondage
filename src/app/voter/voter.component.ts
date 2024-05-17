import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RouterModule} from '@angular/router';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voter',
  standalone: true,
  imports: [RouterModule,HttpClientModule,CommonModule],
  templateUrl: './voter.component.html',
  styleUrl: './voter.component.css'
})
export class VoterComponent implements OnInit {
  data: any;
  sondageId: number | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  mapVotants(option: any): string {
    return option.votants.map((votant: { nom: string }) => votant.nom).join(', ');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.sondageId = id ? parseInt(id, 10) + 1 : null; // Ajoute 1 à l'ID du sondage

    const url = `http://localhost/api/sondages/${this.sondageId}`;

    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.http.get<any>(url, { headers }).subscribe(
      (response) => {
        this.data = response.data;
        console.log('Données du sondage récupérées :', this.sondageId, this.data);

        const jsonArray = [this.data];
        console.log('Tableau JSON des données du sondage :', jsonArray);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données du sondage :', error);
      }
    );
  }
}
