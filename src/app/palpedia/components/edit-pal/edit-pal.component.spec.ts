import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPalComponent } from './edit-pal.component';

describe('EditPalComponent', () => {
  let component: EditPalComponent;
  let fixture: ComponentFixture<EditPalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
