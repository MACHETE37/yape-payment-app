import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DniRucRegisterComponent } from './dni-ruc-register.component';

describe('DniRucRegisterComponent', () => {
  let component: DniRucRegisterComponent;
  let fixture: ComponentFixture<DniRucRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DniRucRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DniRucRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
