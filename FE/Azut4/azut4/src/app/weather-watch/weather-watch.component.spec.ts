import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWatchComponent } from './weather-watch.component';

describe('WeatherWatchComponent', () => {
  let component: WeatherWatchComponent;
  let fixture: ComponentFixture<WeatherWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
