// add-player.component.ts
import { Component } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
})
export class AddPlayerComponent {
  player: Player = { name: '', position: '', age: 0 };

  constructor(private playerService: PlayerService) {}

  addPlayer() {
    this.playerService.addPlayer(this.player).subscribe(() => {
      // Player added successfully, navigate to the player list.
    });
  }
}

// add-player.component.html
<!-- Create a form for adding a player -->
