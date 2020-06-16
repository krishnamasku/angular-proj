import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDirectoryHomeComponent } from './phone-directory-home.component';

describe('PhoneDirectoryHomeComponent', () => {
  let component: PhoneDirectoryHomeComponent;
  let fixture: ComponentFixture<PhoneDirectoryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDirectoryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDirectoryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
