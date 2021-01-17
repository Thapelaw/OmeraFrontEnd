import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMechanicComponent } from './edit-mechanic.component';

describe('EditMechanicComponent', () => {
  let component: EditMechanicComponent;
  let fixture: ComponentFixture<EditMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMechanicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
