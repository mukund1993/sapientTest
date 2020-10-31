import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilteConstructor, SpacexService } from 'src/app/service/spacex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public spacexService: SpacexService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.spacexService.Filters = new FilteConstructor( params);
      this.spacexService.getLaunches();
    });
  }
  resetFilter(){
    this.spacexService.Filters = new FilteConstructor();
    this.spacexService.redirect();
  }
  filterChanged( filterKey, value){
    this.spacexService.Filters[filterKey] = value;
    this.spacexService.redirect();
  }

  trackById(index: number, item) {
    return item.id
  }
}
