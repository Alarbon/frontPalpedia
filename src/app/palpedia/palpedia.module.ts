import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PalpediaRoutingModule } from './palpedia-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPalsComponent } from './pages/add-pals/add-pals.component';
import { HomeComponent } from './pages/home/home.component';
import { ListPalsComponent } from './components/list-pals/list-pals.component';
import { SearchComponent } from './components/search/search.component';
import { SkeletonComponent } from '../shared/components/skeleton/skeleton.component';
import { EditPalComponent } from './components/edit-pal/edit-pal.component';
import { DeletePalComponent } from './components/delete-pal/delete-pal.component';

@NgModule({
  declarations: [
    ListPalsComponent,
    AddPalsComponent,
    HomeComponent,
    SearchComponent,
    SkeletonComponent,
    EditPalComponent,
    DeletePalComponent,
  ],
  imports: [
    CommonModule,
    PalpediaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [ListPalsComponent, AddPalsComponent],
})
export class PalpediaModule {}
