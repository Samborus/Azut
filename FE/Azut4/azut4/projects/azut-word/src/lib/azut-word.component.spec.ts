import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzutWordComponent } from './azut-word.component';

describe('AzutWordComponent', () => {
  let component: AzutWordComponent;
  let fixture: ComponentFixture<AzutWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzutWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzutWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
