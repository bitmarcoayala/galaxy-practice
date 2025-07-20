import { inject, Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export abstract class BaseHttpService {

  protected readonly baseUrl: string;

  protected readonly config= inject(ConfigService)

  protected readonly http=inject(HttpClient);

  constructor(){
    this.baseUrl =this.config.apiUrl
  }

}
