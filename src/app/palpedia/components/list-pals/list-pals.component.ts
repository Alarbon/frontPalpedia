import { Component, Input } from '@angular/core';
import { Pal } from '../../interfaces/pal';

@Component({
  selector: 'app-list-pals',
  templateUrl: './list-pals.component.html',
  styleUrl: './list-pals.component.css',
})
export class ListPalsComponent {
  selectedPal: Pal | undefined;
  palEdit: boolean = false;
  palDelete: boolean = false;

  @Input()
  pals: Pal[] = [];

  getDrops(drops: string[]) {
    return drops.join(', ') + '.' || 'Does not have drops.';
  }
  getTypes(types: string[]) {
    //lo devuelvo con punto al final
    return types.join(', ') + '.' || 'Does not have types.';
  }

  toggleDelete(pal: Pal) {
    this.selectedPal = pal;
    this.palDelete = !this.palDelete;
  }
  toggleEdit(pal: Pal) {
    this.selectedPal = pal;
    this.palEdit = !this.palEdit;
  }

  handleCloseModalDelete() {
    this.palDelete = !this.palDelete;
  }

  handleConfirmDelete() {
    this.pals = this.pals.filter((pal) => pal._id !== this.selectedPal!._id);
    this.selectedPal = undefined;
    this.palDelete = !this.palDelete;
  }

  handlePalEmit(pal: Pal) {
    this.selectedPal = pal;
    this.handleConfirmEdit();
  }
  handleConfirmEdit() {
    //modifico de la lista el pal selecionado
    this.pals = this.pals.map((pal) => {
      if (pal._id === this.selectedPal!._id) {
        //cambio los atributos del pal seleccionado uno a uno
        pal.image = this.selectedPal!.image;
        pal.name = this.selectedPal!.name;
        pal.wiki = this.selectedPal!.wiki;
        pal.types = this.selectedPal!.types;
        pal.drops = this.selectedPal!.drops;
        pal.description = this.selectedPal!.description;

        return pal;
      }
      return pal;
    });
    console.log(this.pals);

    this.selectedPal = undefined;
    this.palEdit = !this.palEdit;
  }

  handleCloseModalEdit() {
    this.palEdit = !this.palEdit;
  }
}
