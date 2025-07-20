import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

	readonly isSideNavOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
