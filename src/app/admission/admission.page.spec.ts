import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmissionPage } from './admission.page';

describe('AdmissionPage', () => {
  let component: AdmissionPage;
  let fixture: ComponentFixture<AdmissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
