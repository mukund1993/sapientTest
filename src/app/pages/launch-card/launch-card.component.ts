import { Component, Input, OnInit } from '@angular/core';
import { SpacexService } from 'src/app/service/spacex.service';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.css']
})
export class LaunchCardComponent implements OnInit {
  @Input() launchObj;
  @Input() indexNo;
  constructor( public spacexService : SpacexService) { }

  ngOnInit(): void {
  }

}
