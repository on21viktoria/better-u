import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Challenge } from './challenge';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService extends Dexie  {
  challenges!: Dexie.Table<Challenge, string>;

  constructor() { 
    super("challenge-db")
    this.version(1).stores({
      challenges: 'id'
    })
  }

  async addChallenge(name: string) {
    const challenge = { name, id:crypto.randomUUID()};
    await this.challenges.add(challenge);
    console.log(challenge)
  }

  async getAllChallenges() {
    return await this.challenges.toArray();
  }

  async bulkPut(challenges: Challenge[]) {
    await this.challenges.bulkPut(challenges);
  }
}
