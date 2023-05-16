import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { worker } from './worker';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  private workerUrl = 'api/workers';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getWorkers(): Observable<worker[]> {
    return this.http.get<worker[]>(this.workerUrl);
  }

  deleteHero(tunnus: string): Observable<worker> {
    const url = `${this.workerUrl}/${tunnus}`;

    return this.http.delete<worker>(url, this.httpOptions);
  }

  addWorker(worker: worker): Observable<worker> {
    return this.http.post<worker>(this.workerUrl, worker, this.httpOptions);
  }

  getWorker(id: number): Observable<worker> {
    const url = `${this.workerUrl}/${id}`;
    return this.http.get<worker>(url);
  }
}
