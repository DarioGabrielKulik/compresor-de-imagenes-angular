import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompresorDescargaComponent } from './compresor-descarga.component';

describe('CompresorDescargaComponent', () => {
  let component: CompresorDescargaComponent;
  let fixture: ComponentFixture<CompresorDescargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompresorDescargaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompresorDescargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
