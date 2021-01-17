import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMapComponent } from './request-map.component';

describe('RequestMapComponent', () => {
  let component: RequestMapComponent;
  let fixture: ComponentFixture<RequestMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
