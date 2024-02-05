import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPalsComponent } from './list-pals.component';

describe('ListPalsComponent', () => {
  let component: ListPalsComponent;
  let fixture: ComponentFixture<ListPalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
