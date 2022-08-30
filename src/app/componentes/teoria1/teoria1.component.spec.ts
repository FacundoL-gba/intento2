import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teoria1Component } from './teoria1.component';

describe('Teoria1Component', () => {
  let component: Teoria1Component;
  let fixture: ComponentFixture<Teoria1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Teoria1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teoria1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
