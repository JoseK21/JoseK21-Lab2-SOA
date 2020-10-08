import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CICDHomeComponent } from './cicdhome.component';

describe('CICDHomeComponent', () => {
  let component: CICDHomeComponent;
  let fixture: ComponentFixture<CICDHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CICDHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CICDHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
