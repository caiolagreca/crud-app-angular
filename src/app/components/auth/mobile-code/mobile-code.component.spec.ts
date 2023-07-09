import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCodeComponent } from './mobile-code.component';

describe('MobileCodeComponent', () => {
  let component: MobileCodeComponent;
  let fixture: ComponentFixture<MobileCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileCodeComponent]
    });
    fixture = TestBed.createComponent(MobileCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
