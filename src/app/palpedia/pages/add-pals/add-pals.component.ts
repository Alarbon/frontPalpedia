import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PalService } from '../../service/pal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pals',
  templateUrl: './add-pals.component.html',
  styleUrl: './add-pals.component.css',
})
export class AddPalsComponent {
  constructor(
    private fb: FormBuilder,
    private palService: PalService,
    private router: Router
  ) {}

  public myForm: FormGroup = this.fb.group({
    image: ['', Validators.required],
    name: ['', Validators.required],
    wiki: [''],
    types: ['', Validators.required],
    drops: ['', Validators.required],
    description: ['', Validators.required],
  });

  async addPal() {
    if (this.myForm.invalid) {
      return;
    }

    const formValue = this.myForm.value;

    const newPal = {
      image: formValue.image,
      name: formValue.name,
      wiki: formValue.wiki,
      types: formValue.types.split(',').map((type: string) => type.trim()),
      drops: formValue.drops.split(',').map((drop: string) => drop.trim()),
      description: formValue.description,
    };

    this.palService.addPal(newPal).subscribe((response) => {
      if (response) {
        this.router.navigate(['/home']);
      }
    });
  }
}
