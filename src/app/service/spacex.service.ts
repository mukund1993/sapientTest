import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
const apiHost = "https://api.spacexdata.com/v3/";
@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  public deviceInfo = null;
  public Launches = [];
  constructor(private http: HttpClient,private deviceService: DeviceDetectorService ) { 
    this.epicFunction();
  }

  public getLaunches(){
    this.http.get( apiHost + 'launches').subscribe((res)=>{
      if( Array.isArray(res)){
        this.Launches = res;
        console.log( this.Launches );
      }
    })
  }

  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
   
    let isMobile = this.deviceService.isMobile();
    let isTablet = this.deviceService.isTablet();
    let isDesktopDevice = this.deviceService.isDesktop();
    isMobile ? this.deviceInfo.device = 'mobile' : isTablet ? this.deviceInfo.device = 'tablet' : this.deviceInfo.device = 'desc';
    this.deviceInfo['divide'] = 0;
    isTablet ? this.deviceInfo['divide'] = 2 : null;
    isDesktopDevice ? this.deviceInfo['divide'] = 4 : null;
    console.log(this.deviceInfo);
   }
}
