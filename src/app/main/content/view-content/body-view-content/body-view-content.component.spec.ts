import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyViewContentComponent } from './body-view-content.component';

describe('BodyViewContentComponent', () => {
  let component: BodyViewContentComponent;
  let fixture: ComponentFixture<BodyViewContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyViewContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyViewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
