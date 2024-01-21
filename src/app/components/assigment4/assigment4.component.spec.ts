import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assigment4Component } from './assigment4.component';

describe('Assigment4Component', () => {
  let component: Assigment4Component;
  let fixture: ComponentFixture<Assigment4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assigment4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assigment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
