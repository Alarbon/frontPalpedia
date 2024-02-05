import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePalComponent } from './delete-pal.component';

describe('DeletePalComponent', () => {
  let component: DeletePalComponent;
  let fixture: ComponentFixture<DeletePalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletePalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
