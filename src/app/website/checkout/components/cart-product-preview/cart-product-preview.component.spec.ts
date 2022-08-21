import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductPreviewComponent } from './cart-product-preview.component';

describe('CartProductPreviewComponent', () => {
  let component: CartProductPreviewComponent;
  let fixture: ComponentFixture<CartProductPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartProductPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartProductPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
