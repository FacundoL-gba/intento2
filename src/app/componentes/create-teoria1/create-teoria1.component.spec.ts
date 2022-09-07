import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeoria1Component } from './create-teoria1.component';

describe('CreateTeoria1Component', () => {
  let component: CreateTeoria1Component;
  let fixture: ComponentFixture<CreateTeoria1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTeoria1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTeoria1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
