import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddChallengeComponent } from '../add-challenge/add-challenge.component';
import { Challenge } from '../challenge';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css'],
})
export class ChallengesComponent {
  challenges: Challenge[] = [];
  constructor(
    private challengeService: ChallengeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.challengeService.getAllChallenges().then((challenges) => {
      this.challenges = challenges;
    });
  }

  navigate() {
    this.router.navigate(['/add-challenge']);
  }

  /*async ngDoCheck() {
    let newChallenges: Challenge[] = [];
    await this.challengeService
      .getAllChallenges()
      .then((challenges) => (newChallenges = challenges));
    console.log(this.challenges.length);
    console.log(newChallenges.length);
    if (this.challenges.length !== newChallenges.length) {
      console.log('I fired');
    }
  }*/
}
