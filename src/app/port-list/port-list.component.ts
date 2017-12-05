import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { PortService } from '../api/services/port.service';
import { PortSearchResult } from '../api/models/port-search-result';

@Component({
  selector: 'app-port-list',
  templateUrl: './port-list.component.html',
  styleUrls: ['./port-list.component.css']
})
export class PortListComponent implements OnInit {

  ports$: Observable<PortSearchResult[]>;

  constructor(public portService: PortService) { }

  ngOnInit() {
    this.ports$ = this.portService.filterPort( {} );
  }

}