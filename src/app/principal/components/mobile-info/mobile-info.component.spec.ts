import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileInfoComponent } from './mobile-info.component';

describe('MobileInfoComponent', () => {
  let component: MobileInfoComponent;
  let fixture: ComponentFixture<MobileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
