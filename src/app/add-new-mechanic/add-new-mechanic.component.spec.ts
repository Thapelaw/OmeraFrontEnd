import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMechanicComponent } from './add-new-mechanic.component';

describe('AddNewMechanicComponent', () => {
  let component: AddNewMechanicComponent;
  let fixture: ComponentFixture<AddNewMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMechanicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
