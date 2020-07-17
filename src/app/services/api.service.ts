import { OfflineManagerService } from './offline-manager.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NetworkService, ConnectionStatus } from './network.service';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";

const API_STORAGE_KEY = 'specialkey';
const API_URL = 'https://reqres.in/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
  private http: HttpClient,
  private networkService: NetworkService,
  private storage: Storage,
  private offlineManager: OfflineManagerService) { }

  ngOnInit() {


  }

  async handleRequest(data) {

  this.offlineManager.storeRequest(data);


  }

  async getRequest() {

    return this.offlineManager.retrieveRequest();

  }

  async clearStorage() {

    return this.offlineManager.clearAll();

    }


}