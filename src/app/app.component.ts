import { Component } from '@angular/core';

import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'votingApp';
  constructor(private voteService:ServiceService){}

 
}
