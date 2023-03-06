import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddChallengeComponent } from '../add-challenge/add-challenge.component';
import { Challenge } from '../challenge';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent {
  challenges: Challenge[] = []
  constructor(public dialog: MatDialog, private challengeService: ChallengeService) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    console.log("open dialog")
    this.dialog.open(AddChallengeComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit() {
  }


}

