import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeUserPageComponent } from './welcome-user-page.component';

describe('WelcomeUserPageComponent', () => {
  let component: WelcomeUserPageComponent;
  let fixture: ComponentFixture<WelcomeUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
