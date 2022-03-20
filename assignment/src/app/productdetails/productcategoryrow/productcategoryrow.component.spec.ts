import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcategoryrowComponent } from './productcategoryrow.component';

describe('ProductcategoryrowComponent', () => {
  let component: ProductcategoryrowComponent;
  let fixture: ComponentFixture<ProductcategoryrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcategoryrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcategoryrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
