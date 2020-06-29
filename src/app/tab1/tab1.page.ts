import { Component} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BoundElementProperty } from '@angular/compiler';
import { NavController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';



const URL = 'http://liquidearthlake.org/json/getalldistances/'+35.9049+'/'+-79.0469;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{


  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  isGeoLocationFound:boolean;
  nearestGauge:any;
  nearestGaugeID:string;
  nearestGaugeIncID:number;
  gauges=[];
  date:any;
  time:any;
  isBubbleLevelOkay:string;
  gauge_data:any;
  problem_data:any;
  value = 0 ;

  constructor (
    private geolocation:Geolocation,
    private alertController:AlertController,
    private http:HttpClient,
    private toastCtrl: ToastController, 
    private router:Router,
    private emailcomposer: EmailComposer,
    private navCtrl: NavController
  
    ){}

  ngOnInit(){
    
    this.getCurrentDateTime()
    this.getAllGauges();
    this.getLocation();
    
    if(!this.isGeoLocationFound){
        //this.presentAlertPrompt();
    }
    else{
    }
    //this.getLocation();

    
  }

  async presentAlert(){

    const alert = await this.alertController.create({

        header: 'Report a problem',
        message: 'Please enter the Gauge ID and Problem',
        inputs: [
          {
            name: 'gauge_id',
            type: 'text',
            placeholder: 'Gauge ID'
          }, 
          {
            name: 'problem',
            type: 'text',
            placeholder: 'Problem'
          }
         
        ],        
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'SUBMIT',
            handler: data => {

                this.gauge_data = data.gauge_id;
                this.problem_data = data.problem;
                console.log(this.gauge_data);
                console.log(this.problem_data);


                let email = {

                    to: 'dipayan5175@gmail.com',
                    subject: 'LOCSS App Issue',
                    body: 'Gauge ID: ' + this.gauge_data + '  Problem: ' + this.problem_data,
                    isHTML: true
              

                }
                console.log(email);
                console.log('Successfully updated');

                this.emailcomposer.open(email);
                console.log('Successfully sent');
             
            }
          }
        ]

    });

      await alert.present();
  }

  



  getCurrentDateTime(){
      let date = new Date();
      this.date=moment().format('YYYY-MM-DD');
      this.time=moment().format('HH:mm');
      this.isBubbleLevelOkay="Yes";
      console.log(this.date);
      console.log(this.time);
  }

 

 

  // Get The  Geolocation
  
  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.isGeoLocationFound=true;
      this.http.get('http://liquidearthlake.org/json/getnearestgauge/'+resp.coords.latitude+'/'+resp.coords.longitude)
      .subscribe((data : any) =>
      {
        
          console.log(data);
          this.nearestGauge=data;
          this.nearestGaugeID=data.gauge_id;
          this.nearestGaugeIncID=data.id;
          console.log(this.nearestGaugeIncID);
        
      },
      (error : any) =>
      {
        console.log(error);
      });
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       this.isGeoLocationFound=false;
       console.log('Error getting location', error);
     });

  }

  // Present the Add Gauge prompt when geolocation is not found
  /*async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Please Enter the Gauge ID',
      inputs: [
        {
          name: 'gauge_id',
          type: 'text',
          placeholder: 'Gauge ID'
        }
       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'SUBMIT',
          handler: data => {
            this.nearestGaugeID=data.gauge_id;
            console.log(this.nearestGaugeID);
          }
        }
      ]
    });
  
    await alert.present();
  }
*/
  getAllGauges(){
    this.http.get('http://liquidearthlake.org/json/gauges')
    .subscribe((data : any) =>
    {
      this.gauges=data;
      console.log(data);
      
    },
    (error : any) =>
    {
      console.log(error);
    });
  }

  



  async onSubmit(form:NgForm){

    let toast = await this.toastCtrl.create({
      message: 'Data submitted successfuly',
      duration: 2000,
      position: "bottom"
    });

    toast.present();

    this.nearestGauge= this.gauges.filter(m => m.id == form.value['gauge_inc_id']);
    console.log(form);
    this.http.post("http://liquidearthlake.org/json/reading/store", form.value)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });
    console.log(this.gauges);
    
    console.log(this.nearestGauge[0].gauge_id);
    this.router.navigateByUrl('tabs/tab3/'+ form.value['gauge_inc_id']+'/'+ this.nearestGauge[0].gauge_id);
  }

 
}
