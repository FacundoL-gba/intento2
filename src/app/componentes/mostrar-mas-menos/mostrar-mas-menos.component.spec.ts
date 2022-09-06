import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMasMenosComponent } from './mostrar-mas-menos.component';

describe('MostrarMasMenosComponent', () => {
  let component: MostrarMasMenosComponent;
  let fixture: ComponentFixture<MostrarMasMenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarMasMenosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarMasMenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
