import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPalsComponent } from './add-pals.component';

describe('AddPalsComponent', () => {
  let component: AddPalsComponent;
  let fixture: ComponentFixture<AddPalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
