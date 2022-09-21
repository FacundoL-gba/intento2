import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teoria2Component } from './teoria2.component';

describe('Teoria2Component', () => {
  let component: Teoria2Component;
  let fixture: ComponentFixture<Teoria2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Teoria2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teoria2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
