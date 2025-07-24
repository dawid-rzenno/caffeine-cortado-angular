import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
	readonly isSideNavOpen$: Subject<boolean> = new Subject();
}
