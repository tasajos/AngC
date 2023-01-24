import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontUComponent } from './front-u.component';

describe('FrontUComponent', () => {
  let component: FrontUComponent;
  let fixture: ComponentFixture<FrontUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
