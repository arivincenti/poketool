import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadButtonsComponent } from './pad-buttons.component';

describe('PadButtonsComponent', () => {
  let component: PadButtonsComponent;
  let fixture: ComponentFixture<PadButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
