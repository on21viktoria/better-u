import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html',
  styleUrls: ['./challenge-item.component.css']
})
export class ChallengeItemComponent {
    challenge = {
      name: "No buy",
    }
}
