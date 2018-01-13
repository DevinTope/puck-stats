import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Division } from '../division';
import { DivisionService } from '../division.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  divisions: Division[];

  constructor(private divisionService: DivisionService) { }

  ngOnInit() {
    this.getDivisions();
  }

  getDivisions(): void{
    this.divisionService.getDivisions().subscribe(divisions => this.divisions = divisions);
  }
}
