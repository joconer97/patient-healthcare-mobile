import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckupSummaryPage } from './checkup-summary.page';

describe('CheckupSummaryPage', () => {
  let component: CheckupSummaryPage;
  let fixture: ComponentFixture<CheckupSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckupSummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckupSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
