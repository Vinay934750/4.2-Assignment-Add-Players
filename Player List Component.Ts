// player-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.getPlayers().subscribe((data) => {
      this.players = data;
    });
  }

  // Implement functionality for selecting a player and updating/deleting.
}

// player-list.component.html
<ul>
  <li *ngFor="let player of players">
    {{ player.name }} - {{ player.position }}
    <!-- Add buttons for updating/deleting -->
  </li>
</ul>
