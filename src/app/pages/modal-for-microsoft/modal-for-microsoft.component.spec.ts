import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForMicrosoftComponent } from './modal-for-microsoft.component';

describe('ModalForMicrosoftComponent', () => {
  let component: ModalForMicrosoftComponent;
  let fixture: ComponentFixture<ModalForMicrosoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalForMicrosoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalForMicrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
