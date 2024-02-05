import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PalService } from '../../service/pal.service';
import { Pal } from '../../interfaces/pal';

@Component({
  selector: 'app-delete-pal',
  templateUrl: './delete-pal.component.html',
  styleUrl: './delete-pal.component.css',
})
export class DeletePalComponent {
  @Input() pal?: Pal;

  @Output() confirmDelete = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private palService: PalService) {
  }

  deletePal() {
    this.palService.deletePal(this.pal!._id!.toString()).subscribe();
    this.confirmDelete.emit();
  }

  closeDeleteModal() {
    this.closeModal.emit();
  }
}
