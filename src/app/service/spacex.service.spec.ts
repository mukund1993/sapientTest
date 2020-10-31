import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

import { SpacexService } from './spacex.service';

describe('SpacexService', () => {
  let service: SpacexService;
  let routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[{ provide: Router, useValue: routerSpy }, DeviceDetectorService]
    });
    service = TestBed.inject(SpacexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('check epicFunction', () => {
    expect(service.deviceInfo).toBeDefined();
  });
  
});