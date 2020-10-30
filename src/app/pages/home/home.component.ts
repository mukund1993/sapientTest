import { Component, OnInit } from '@angular/core';
import { SpacexService } from 'src/app/service/spacex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public spacexService: SpacexService) { 
    this.spacexService.getLaunches();
  }

  ngOnInit(): void {
  }

  trackById(index: number, item) {
    return item.id
}
}
