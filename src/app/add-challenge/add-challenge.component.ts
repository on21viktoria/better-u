import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Challenge } from '../challenge';
import { ChallengeService } from '../challenge.service';
import { SyncService } from '../sync.service';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css'],
})
export class AddChallengeComponent {
  challenges: Challenge[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddChallengeComponent>,
    private challengeService: ChallengeService,
    private syncService: SyncService
  ) {
    this.refresh();
  }

  async addChallenge(name: string) {
    await this.challengeService.addChallenge(name);
    await this.refresh();
  }

  async sync() {
    await this.syncService.sync();
    await this.refresh();
  }

  async refresh() {
    this.challenges = await this.challengeService.getAllChallenges();
  }
}
