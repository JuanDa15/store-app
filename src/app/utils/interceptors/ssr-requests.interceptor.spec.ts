import { TestBed } from '@angular/core/testing';

import { SsrRequestsInterceptor } from './ssr-requests.interceptor';

describe('SsrRequestsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SsrRequestsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SsrRequestsInterceptor = TestBed.inject(SsrRequestsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
