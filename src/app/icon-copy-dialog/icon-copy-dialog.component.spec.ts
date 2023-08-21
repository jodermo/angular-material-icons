import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCopyDialogComponent } from './icon-copy-dialog.component';

describe('IconCopyDialogComponent', () => {
  let component: IconCopyDialogComponent;
  let fixture: ComponentFixture<IconCopyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCopyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCopyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
