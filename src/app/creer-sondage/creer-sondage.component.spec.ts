import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerSondageComponent } from './creer-sondage.component';

describe('CreerSondageComponent', () => {
  let component: CreerSondageComponent;
  let fixture: ComponentFixture<CreerSondageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerSondageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreerSondageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
