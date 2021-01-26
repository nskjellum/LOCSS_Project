import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx'
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastController, Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

export enum ConnectionStatus {
  Online,
  Offline
}


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);

    constructor(public AlertController: AlertController, private network: Network, private toastController: ToastController, private plt: Platform) {
      this.plt.ready().then(() => {
        this.initializeNetworkEvents();
        let status =  this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
        this.status.next(status);
      });
    }

async presentAlert() {
            //console.log('The alert is being presented.');
            const alert = await this.AlertController.create({
              cssClass: 'my-custom-class',
              header: 'Alert',
              subHeader: 'Subtitle',
              message: 'This is an alert message.',
          buttons: ['OK', 'Nah Fam', 'Ditto']
        });

        await alert.present();
        let result = await alert.onDidDismiss();
            //console.log(result);
  }

    public initializeNetworkEvents() {

        //console.log('Initializing Network events');

      this.network.onDisconnect().subscribe(() => {
        if (this.status.getValue() === ConnectionStatus.Online) {
          //console.log('WE ARE OFFLINE');
          this.updateNetworkStatus(ConnectionStatus.Offline);
        }
      });

      this.network.onConnect().subscribe(() => {
        if (this.status.getValue() === ConnectionStatus.Offline) {
          //console.log('WE ARE ONLINE');
          this.updateNetworkStatus(ConnectionStatus.Online);

        }
      });

      //console.log('Events initialized');
    }

    private async updateNetworkStatus(status: ConnectionStatus) {
      this.status.next(status);

      let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
      let toast = this.toastController.create({
        message: `You are now ${connection}`,
        duration: 3000,
        position: 'bottom'
      });
      toast.then(toast => toast.present());
    }

    public onNetworkChange(): Observable<ConnectionStatus> {
      return this.status.asObservable();
    }

    public getCurrentNetworkStatus(): ConnectionStatus {
      return this.status.getValue();
    }
}
