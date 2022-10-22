import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadViewContentComponent } from './head-view-content.component';

describe('HeadViewContentComponent', () => {
  let component: HeadViewContentComponent;
  let fixture: ComponentFixture<HeadViewContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadViewContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadViewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
