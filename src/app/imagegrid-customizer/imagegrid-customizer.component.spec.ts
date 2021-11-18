import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagegridCustomizerComponent } from './imagegrid-customizer.component';

describe('ImagegridCustomizerComponent', () => {
  let component: ImagegridCustomizerComponent;
  let fixture: ComponentFixture<ImagegridCustomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagegridCustomizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagegridCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
