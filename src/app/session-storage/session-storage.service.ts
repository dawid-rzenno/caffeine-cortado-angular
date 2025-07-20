import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SessionStorageService {

	constructor() { }

	static setItem(key: string, value: any): void {
		sessionStorage.setItem(key, JSON.stringify(value));
	}

	static getItem<T>(key: string): T | undefined {
		const item = sessionStorage.getItem(key);
		return item ? JSON.parse(item) as T : undefined;
	}

	static removeItem(key: string): void {
		sessionStorage.removeItem(key);
	}

	static clear(): void {
		sessionStorage.clear();
	}

	static hasKey(key: string): boolean {
		return sessionStorage.getItem(key) !== null;
	}
}
