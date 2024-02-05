import { Component } from '@angular/core';
import { PalService } from '../../service/pal.service';
import { Pal } from '../../interfaces/pal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pals: Pal[] | undefined;

  constructor(private palService: PalService) {
    if (this.pals == undefined) {
      this.palService.getPals().subscribe((pals) => {
        this.palService.pals = pals;
        this.pals = pals;
      });
    }
  }

  getPals(name: string) {
    if (name == '') {
      this.palService.getPals().subscribe((pals) => {
        this.pals = pals;
      });
    } else {
      this.palService.getPalsByName(name).subscribe((pals) => {
        this.pals = pals;
      });
    }
  }
}
