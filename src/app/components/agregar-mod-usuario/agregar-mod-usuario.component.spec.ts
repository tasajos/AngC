import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarModUsuarioComponent } from './agregar-mod-usuario.component';

describe('AgregarModUsuarioComponent', () => {
  let component: AgregarModUsuarioComponent;
  let fixture: ComponentFixture<AgregarModUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarModUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarModUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
