import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchCardComponent } from './launch-card.component';

const temp = {
  "flight_number": 113,
  "mission_name": "CRS-21",
  "mission_id": [
    "EE86F74"
  ],
  "launch_year": "2020",
  "launch_date_unix": 1606780800,
  "launch_date_utc": "2020-12-01T00:00:00.000Z",
  "launch_date_local": "2020-11-30T19:00:00-05:00",
  "is_tentative": true,
  "tentative_max_precision": "month",
  "tbd": false,
  "launch_window": null,
  "rocket": {
    "rocket_id": "falcon9",
    "rocket_name": "Falcon 9",
    "rocket_type": "FT",
    "first_stage": {
      "cores": [
        {
          "core_serial": null,
          "flight": null,
          "block": 5,
          "gridfins": null,
          "legs": null,
          "reused": true,
          "land_success": null,
          "landing_intent": null,
          "landing_type": null,
          "landing_vehicle": null
        }
      ]
    },
    "second_stage": {
      "block": 5,
      "payloads": [
        {
          "payload_id": "CRS-21",
          "norad_id": [],
          "cap_serial": null,
          "reused": true,
          "customers": [
            "NASA (CRS)"
          ],
          "nationality": "United States",
          "manufacturer": "SpaceX",
          "payload_type": "Dragon 1.1",
          "payload_mass_kg": null,
          "payload_mass_lbs": null,
          "orbit": "ISS",
          "orbit_params": {
            "reference_system": "geocentric",
            "regime": "low-earth",
            "longitude": null,
            "semi_major_axis_km": null,
            "eccentricity": null,
            "periapsis_km": null,
            "apoapsis_km": null,
            "inclination_deg": null,
            "period_min": null,
            "lifespan_years": null,
            "epoch": null,
            "mean_motion": null,
            "raan": null,
            "arg_of_pericenter": null,
            "mean_anomaly": null
          },
          "mass_returned_kg": null,
          "mass_returned_lbs": null,
          "flight_time_sec": null,
          "cargo_manifest": null
        }
      ]
    },
    "fairings": null
  },
  "ships": [],
  "telemetry": {
    "flight_club": null
  },
  "launch_site": {
    "site_id": "ksc_lc_39a",
    "site_name": "KSC LC 39A",
    "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
  },
  "launch_success": null,
  "links": {
    "mission_patch": null,
    "mission_patch_small": null,
    "reddit_campaign": null,
    "reddit_launch": null,
    "reddit_recovery": null,
    "reddit_media": null,
    "presskit": null,
    "article_link": null,
    "wikipedia": null,
    "video_link": null,
    "youtube_id": null,
    "flickr_images": []
  },
  "details": null,
  "upcoming": true,
  "static_fire_date_utc": null,
  "static_fire_date_unix": null,
  "timeline": null,
  "crew": null
};
describe('LaunchCardComponent', () => {
  let component: LaunchCardComponent;
  let fixture: ComponentFixture<LaunchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchCardComponent);
    component = fixture.componentInstance;
    component.launchObj = temp;
    component.indexNo = 12;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
