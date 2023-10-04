// player.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  getPlayers() {
    // Implement HTTP GET request to retrieve players.
  }

  addPlayer(player: Player) {
    // Implement HTTP POST request to add a player.
  }

  updatePlayer(player: Player) {
    // Implement HTTP PUT request to update a player.
  }

  deletePlayer(id: string) {
    // Implement HTTP DELETE request to delete a player.
  }

  executeQuery(queryType: string) {
    // Implement HTTP GET request to execute a query based on queryType.
  }
}
