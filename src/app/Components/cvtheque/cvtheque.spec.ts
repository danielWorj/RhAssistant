import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cvtheque } from './cvtheque';

describe('Cvtheque', () => {
  let component: Cvtheque;
  let fixture: ComponentFixture<Cvtheque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cvtheque]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cvtheque);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
