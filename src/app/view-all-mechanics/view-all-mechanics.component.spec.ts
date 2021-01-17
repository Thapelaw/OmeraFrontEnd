import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMechanicsComponent } from './view-all-mechanics.component';

describe('ViewAllMechanicsComponent', () => {
  let component: ViewAllMechanicsComponent;
  let fixture: ComponentFixture<ViewAllMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllMechanicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
