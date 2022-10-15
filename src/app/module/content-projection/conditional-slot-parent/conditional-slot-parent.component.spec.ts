import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalSlotParentComponent } from './conditional-slot-parent.component';

describe('ConditionalSlotParentComponent', () => {
  let component: ConditionalSlotParentComponent;
  let fixture: ComponentFixture<ConditionalSlotParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalSlotParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalSlotParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
