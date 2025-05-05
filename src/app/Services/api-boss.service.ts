import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom, map, Observable, retry } from 'rxjs';
import { BossResponse } from '../interfaces/BossResponse';

@Injectable({
  providedIn: 'root'
})

export class ApiBossService {

  loading = signal<boolean>(false);
  loadingHttpDialog = signal<boolean>(false);
  public requestParameters:any;
  public endpointParameter:string="";

  WebApiUrl = "https://localhost:7293/api";
  constructor(private http: HttpClient) {

    }


  async PostAsync():Promise<BossResponse> {
    try {
    return await firstValueFrom(this.http.post<BossResponse>(`${this.WebApiUrl}/${this.endpointParameter}`, this.requestParameters).pipe(retry(1)));
    } catch (error) {
      throw error;
    }
  }

  async GetAsync():Promise<BossResponse> {
    try {
      const requestOptions = {
        headers: new HttpHeaders({
          // 'Content-Type':  'application/json'
        }),
        params : this.requestParameters
      };
      return await firstValueFrom(this.http.get<BossResponse>(`${this.WebApiUrl}/${this.endpointParameter}`, requestOptions));
    }
    catch (error) {
      throw error;
    }
  }
}