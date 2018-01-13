import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Input } from '@angular/core';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() teamID: number;
  players: Player[];

  constructor(
    private playerService: PlayerService) { }

  ngOnInit() {
    this.getRoster();
  }

  getRoster(): void{
    this.playerService.getRoster(this.teamID).subscribe(players => this.players = players);
  }

}
