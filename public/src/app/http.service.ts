import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from './manager';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private _http: HttpClient) {
  }
  getManagers() {
    return this._http.get('/managers');
  }

  showManager(manager_id: string){
    return this._http.get(`/managers/${manager_id}`);
  }

  addManagers(manager: Manager){
    return this._http.post('/managers', manager);
  }

  editManager(manager_id: string, manager: Manager){
    return this._http.put(`/managers/${manager_id}`, manager);
  }

  remManager(manager_id: string){
    return this._http.delete(`/managers/${manager_id}`);
  }
  addToLikes(like){
    console.log('test')
  }
}