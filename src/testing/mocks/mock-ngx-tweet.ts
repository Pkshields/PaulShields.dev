import { Component, Input, NgModule } from '@angular/core';

/**
 * ngx-tweet uses it's own networking to acquire the tweets. Angular `detectChanges`
 * is unable to know when this loading is complete. This causes random tests to fail
 * after the initial component spec setup as the Twitter API requests completes after
 * the fixture that queried for the tweets is destroyed. These classes mocks out the
 * entire `ngx-tweet` dependency.
 */

// tslint:disable-next-line: component-selector
@Component({ selector: 'ngx-tweet', template: '', styles: []})
export class MockNgxTweetComponent {
  @Input() public tweetId: string;
}

@NgModule({
  declarations: [ MockNgxTweetComponent ],
  exports: [ MockNgxTweetComponent ],
})
export class MockNgxTweetModule { }
