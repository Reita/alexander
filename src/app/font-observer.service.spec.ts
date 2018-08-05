import { TestBed, inject } from '@angular/core/testing';

import { FontObserverService } from './font-observer.service';

describe('FontObserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FontObserverService]
    });
  });

  it('should be created', inject([FontObserverService], (service: FontObserverService) => {
    expect(service).toBeTruthy();
  }));
});
