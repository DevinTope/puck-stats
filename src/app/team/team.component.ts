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
    
    if(!this.divID){
      this.teamService.getTeams().subscribe(teams => this.teams = teams.filter(team => team.division.id == this.divID));
    }
    else{
      this.teamService.getTeams().subscribe(teams => this.teams = teams.filter(team => team.division.id == this.divID));
    }
  }

  filterTeams(team: Team){
    return !(team.division.id == 18);
  }
}
