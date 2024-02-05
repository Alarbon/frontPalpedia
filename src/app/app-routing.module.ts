import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPalsComponent } from './palpedia/components/list-pals/list-pals.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./palpedia/palpedia.module').then(m => m.PalpediaModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
