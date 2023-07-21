// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
  private sharedData = new BehaviorSubject<any>(null);
  sharedData$ = this.sharedData.asObservable();

  setData(data: any) {
    this.sharedData.next(data);
  }
}