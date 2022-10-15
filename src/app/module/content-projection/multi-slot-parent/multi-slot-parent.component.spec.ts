import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotParentComponent } from './multi-slot-parent.component';

describe('MultiSlotParentComponent', () => {
  let component: MultiSlotParentComponent;
  let fixture: ComponentFixture<MultiSlotParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSlotParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSlotParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
