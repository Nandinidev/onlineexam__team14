import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login2ndpageComponent } from './login2ndpage.component';

describe('Login2ndpageComponent', () => {
  let component: Login2ndpageComponent;
  let fixture: ComponentFixture<Login2ndpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Login2ndpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Login2ndpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
