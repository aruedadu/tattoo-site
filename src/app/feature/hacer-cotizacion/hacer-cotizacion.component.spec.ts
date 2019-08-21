import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerCotizacionComponent } from './hacer-cotizacion.component';

describe('HacerCotizacionComponent', () => {
  let component: HacerCotizacionComponent;
  let fixture: ComponentFixture<HacerCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacerCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HacerCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
