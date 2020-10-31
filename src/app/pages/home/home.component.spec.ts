import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { SpacexService } from 'src/app/service/spacex.service';

import { HomeComponent } from './home.component';
class MockSpacexService {
  Launches = [];
  Filters = {};
  getLaunches() {}
  redirect() {}
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers : [{provide: ActivatedRoute, useValue: {
        queryParams: of({ limit: 100, launch_success: true, land_success: false })
      }},
      {provide : SpacexService, useClass:  MockSpacexService}
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check filterChanged', () => {
   component.filterChanged('launch_year', '2017');
   expect( component.spacexService.Filters.hasOwnProperty('launch_year')).toBeTruthy();
   expect( component.spacexService.Filters.launch_year).toEqual('2017');
  });
});
