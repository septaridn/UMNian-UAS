import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyPostPage } from './my-post.page';

describe('MyPostPage', () => {
  let component: MyPostPage;
  let fixture: ComponentFixture<MyPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
