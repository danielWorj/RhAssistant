import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreEmploi } from './offre-emploi';

describe('OffreEmploi', () => {
  let component: OffreEmploi;
  let fixture: ComponentFixture<OffreEmploi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreEmploi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreEmploi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
