import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDataComponent } from './phone-data.component';

describe('PhoneDataComponent', () => {
  let component: PhoneDataComponent;
  let fixture: ComponentFixture<PhoneDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
