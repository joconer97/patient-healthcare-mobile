import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckupPage } from './checkup.page';

describe('CheckupPage', () => {
  let component: CheckupPage;
  let fixture: ComponentFixture<CheckupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
