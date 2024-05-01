import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnMarkersComponent } from './column-markers.component';

describe('ColumnMarkersComponent', () => {
  let component: ColumnMarkersComponent;
  let fixture: ComponentFixture<ColumnMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnMarkersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
