import { ContactComponent } from './contact.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockNgxTweetModule } from 'src/testing/mocks/mock-ngx-tweet';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let dom: HTMLElement;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MockNgxTweetModule
      ],
      declarations: [
        ContactComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  }));

  it('should create the contact component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain list of tweet ids to show on contact page', () => {
    expect(component.tweetIds).toBeTruthy();
    expect(component.tweetIds.length).toBeGreaterThan(0);
    component.tweetIds.forEach((value, key, parent) => {
      expect(Number(value)).not.toBeNaN();
    });
  });

  it('should contain a contact email address', () => {
    expectContactElementExistsAndIsProperlyFormatted('Email', false);
  });

  it('should contain a contact twitter account', () => {
    expectContactElementExistsAndIsProperlyFormatted('Twitter');
  });

  it('should contain a contact linkedin account', () => {
    expectContactElementExistsAndIsProperlyFormatted('LinkedIn');
  });

  it('should contain a link to github', () => {
    expectContactElementExistsAndIsProperlyFormatted('GitHub');
  });

  it('should contain a link to bitbucket', () => {
    expectContactElementExistsAndIsProperlyFormatted('BitBucket');
  });

  it('should show correct number of tweets on contact page', () => {
    const elements = dom.querySelectorAll('ngx-tweet');
    expect(elements.length).toBe(component.tweetIds.length);
  });

  function expectContactElementExistsAndIsProperlyFormatted(text: string, shouldOpenInNewTab: boolean = true) {
    const elements = dom.querySelectorAll('li');

    let result = false;
    elements.forEach((value, key, parent) => {
      if (value.textContent.search(text) !== -1) {
        const aElement = value.querySelector('a');
        expect(aElement).toBeTruthy();
        result = true;

        if (shouldOpenInNewTab) {
          expect(aElement.attributes.getNamedItem('target').value).toBe('_blank');
        }
      }
    });

    expect(result).toBeTruthy();
  }
});
