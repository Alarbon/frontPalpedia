import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pal } from '../../interfaces/pal';
import { PalService } from '../../service/pal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-pal',
  templateUrl: './edit-pal.component.html',
  styleUrl: './edit-pal.component.css',
})
export class EditPalComponent {
  @Input() pal?: Pal;

  @Output() palEmit = new EventEmitter<Pal>();

  @Output() confirmEdit = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  public editForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private palService: PalService) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
      wiki: [''],
      types: ['', Validators.required],
      drops: ['', Validators.required],
      description: ['', Validators.required],
    });

    // Llenar el formulario con los datos del Pal
    if (this.pal) {
      this.editForm.setValue({
        image: this.pal.image || '',
        name: this.pal.name || '',
        wiki: this.pal.wiki || '',
        types: this.pal.types.join(', ') || '',
        drops: this.pal.drops.join(', ') || '',
        description: this.pal.description || '',
      });
    }
  }

  editPal() {
    if (this.editForm.invalid) {
      return;
    }

    const formValue = this.editForm.value;

    const editedPal: Pal = {
      _id: this.pal?._id,
      image: formValue.image,
      name: formValue.name,
      wiki: formValue.wiki,
      types: formValue.types.split(',').map((type: string) => type.trim()),
      drops: formValue.drops.split(',').map((drop: string) => drop.trim()),
      description: formValue.description,
    };

    this.palService.updatePal(editedPal).subscribe();

    this.palEmit.emit(editedPal);

    this.confirmEdit.emit();
  }

  closeEditModal() {
    this.closeModal.emit();
  }
}
