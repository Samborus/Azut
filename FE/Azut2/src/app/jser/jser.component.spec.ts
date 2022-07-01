import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JserComponent } from './jser.component';

describe('JserComponent', () => {
  let component: JserComponent;
  let fixture: ComponentFixture<JserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
