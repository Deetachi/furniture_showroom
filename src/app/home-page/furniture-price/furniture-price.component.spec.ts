import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurniturePriceComponent } from './furniture-price.component';

describe('FurniturePriceComponent', () => {
  let component: FurniturePriceComponent;
  let fixture: ComponentFixture<FurniturePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurniturePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurniturePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
