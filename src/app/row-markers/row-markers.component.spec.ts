import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowMarkersComponent } from './row-markers.component';

describe('RowMarkersComponent', () => {
  let component: RowMarkersComponent;
  let fixture: ComponentFixture<RowMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowMarkersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
