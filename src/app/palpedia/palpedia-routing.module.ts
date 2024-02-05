import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPalsComponent } from './pages/add-pals/add-pals.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'add-pal',
        component: AddPalsComponent,
      },

      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalpediaRoutingModule {}
