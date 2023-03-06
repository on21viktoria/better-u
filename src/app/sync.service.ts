import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Challenge } from './challenge';
import { ChallengeService } from './challenge.service';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  constructor(private challengeService: ChallengeService, private httpClient: HttpClient) { 
  }

  async sync() {
    const allChallenges = await this.challengeService.getAllChallenges();
    const mergedChallenges = await firstValueFrom(this.httpClient.post<Challenge[]>('http://localhost:3030/sync', allChallenges))
    await this.challengeService.bulkPut(mergedChallenges)
  }
}
