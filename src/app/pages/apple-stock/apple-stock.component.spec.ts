import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleStockComponent } from './apple-stock.component';

describe('AppleStockComponent', () => {
  let component: AppleStockComponent;
  let fixture: ComponentFixture<AppleStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
