import { Routes, RouterModule, Router, NavigationEnd } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { CreerSondageComponent } from './creer-sondage/creer-sondage.component';
import { ConnectionComponent } from './connection/connection.component';
import { VoterComponent } from './voter/voter.component';

export const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        data: { title: 'Page Principale' }
      },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'creer-sondage',
        component: CreerSondageComponent,
        data: { title: 'Création de sondage' }
      },
      {
        path: 'connection',
        component: ConnectionComponent,
        data: { title: 'Voter' }
      },
      {
        path: 'voter/:id',
        component: VoterComponent,
        data: { title: 'Voter' }
      }
      

    
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    // Écoute des événements de navigation
    this.router.events.subscribe(event => {
      // Si la navigation est terminée et que la nouvelle URL n'est pas la même que l'URL précédente
      if (event instanceof NavigationEnd) {
        window.location.reload(); // Actualisation de la page
      }
    });
  }
}