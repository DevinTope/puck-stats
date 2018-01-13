import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Input } from '@angular/core';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() divID: number;
  teams: Team[];
  
  constructor(
    private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void{
    this.teamService.getTeams().subscribe(teams => this.teams = teams.filter(team => team.division.id == this.divID).sort((a,b)=>a.name.localeCompare(b.name)));
  }
}
