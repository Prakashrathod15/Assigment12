import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigIImagerotateComponent } from './assig-i-imagerotate.component';

describe('AssigIImagerotateComponent', () => {
  let component: AssigIImagerotateComponent;
  let fixture: ComponentFixture<AssigIImagerotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssigIImagerotateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssigIImagerotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
