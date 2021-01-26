import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, from, of, forkJoin } from 'rxjs';
import { switchMap, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
 
const STORAGE_REQ_KEY = 'storedreq';
 
interface StoredRequest {
  url: string,
  type: string,
  data: any,
  time: number,
  id: string
}
 
@Injectable({
  providedIn: 'root'
})
export class OfflineManagerService {
 
  constructor(private storage: Storage, private http: HttpClient, private toastController: ToastController) { }
 

 
  storeRequest(data, key) {
    let toast = this.toastController.create({
      message: `Your request is being saved because you are offline. It will be sent when you reconnect.`,
      duration: 3000,
      position: 'bottom'
    });
    toast.then(toast => toast.present());

      return this.storage.set(key, data);

  }
 
  sendRequests(operations: StoredRequest[]) {
    let obs = [];
 
    for (let op of operations) {
      //console.log('Make one request: ', op);
      let oneObs = this.http.request(op.type, op.url, op.data);
      obs.push(oneObs);
    }
 
    // Send out all local events and return once they are finished
    return forkJoin(obs);
  }

  async retrieveRequest(key) {


    return this.storage.get(key);

  }

  async clearOne(key) {

  return this.storage.remove(key);

  }


}