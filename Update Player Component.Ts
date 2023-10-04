// update-player.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
})
export class UpdatePlayerComponent {
  player: Player = { name: '', position: '', age: 0 };

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {
    // Retrieve player details using route parameters.
  }

  updatePlayer() {
    this.playerService.updatePlayer(this.player).subscribe(() => {
      // Player updated successfully, navigate to the player list.
    });
  }
}

// update-player.component.html
<!-- Create a form for updating player details -->
