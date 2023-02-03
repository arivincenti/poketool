import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLightsComponent } from './header-lights.component';

describe('HeaderLightsComponent', () => {
  let component: HeaderLightsComponent;
  let fixture: ComponentFixture<HeaderLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
