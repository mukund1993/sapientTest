import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
const apiHost = 'https://api.spacexdata.com/v3/';
@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  public deviceInfo = null;
  public Launches = [];
  public LaunchYears = [
    '2006', '2007', '2008', '2009', '2010', '2012', '2013', '2014', '2015', '2016'
  , '2017', '2018', '2019', '2020', '2021'];
  public Filters = new FilteConstructor();
  constructor(private http: HttpClient, private deviceService: DeviceDetectorService , private router: Router) {
    this.epicFunction();
  }

  public getLaunches() {
    let query = '';
    if ( this.Filters.limit) {
      query += 'limit=' + this.Filters.limit;
    }
    if ( this.Filters.launch_year) {
      query += '&launch_year=' + this.Filters.launch_year;
    }
    if ( this.Filters.launch_success) {
      query += '&launch_success=' + this.Filters.launch_success;
    }
    if ( this.Filters.land_success) {
      query += '&land_success=' + this.Filters.land_success;
    }
    if ( query) {
      query = '?' + query;
    }
    this.http.get( apiHost + 'launches' + query).subscribe((res) => {
      if ( Array.isArray(res)) {
        this.Launches = res;
      }
    });
  }

  public redirect() {
    const temp = this.Filters;
    if (! this.Filters.launch_year) { delete temp.launch_year; }
    if (! this.Filters.launch_success) { delete temp.launch_success; }
    if (! this.Filters.land_success) { delete temp.land_success; }
    this.router.navigate(['/spacex'], { queryParams: temp });
  }
  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();

    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    isMobile ? this.deviceInfo.device = 'mobile' : isTablet ? this.deviceInfo.device = 'tablet' : this.deviceInfo.device = 'desc';
    this.deviceInfo.divide = 0;
    if ( isTablet) { this.deviceInfo.divide = 2; }
    if ( isDesktopDevice) { this.deviceInfo.divide = 4; }
   }
}

export class FilteConstructor {
  public limit = 100;
  public launch_year = '';
  public launch_success = '';
  public land_success = '';

constructor(initial?) {
  if (initial) {
    this.limit = initial.limit || 100;
    this.launch_year = initial.launch_year || '';
    this.launch_success = initial.launch_success || '';
    this.land_success = initial.land_success || '';
  }
}
}
