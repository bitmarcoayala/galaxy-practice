import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {

  private config: any;

  private readonly uri='configs/dev/config.json'

  private http= inject(HttpClient)


  load(): Promise<void> {
    return lastValueFrom(
      this.http.get(this.uri)
    )
    .then((data) => {
      this.config = data;
    })
    .catch((err) => {
      console.error('[ConfigService] Failed to load config.json', err);
      return Promise.reject(err);
    });
  }

  get(key: string): any {
    return this.config?.[key];
  }
  get apiUrl(): string {
    return this.config?.apiUrl ?? '';
  }
}
