import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityManagerComponent } from './quantity-manager.component';

describe('QuantityManagerComponent', () => {
  let component: QuantityManagerComponent;
  let fixture: ComponentFixture<QuantityManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantityManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
