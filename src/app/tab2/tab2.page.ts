import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Observable } from 'rxjs/Observable'
import { CacheService } from 'ionic-cache';
import 'rxjs/add/operator/map';
//import  { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  gauges:any;
  lat:any;
  long:any;
  tmp:any;
  public films: Observable <any>;
  filmsKey = 'my-films-group';
  
	constructor(private storage: Storage, private http: HttpClient, private splash:SplashScreen,private geolocation:Geolocation, private cache: CacheService){}

	ngOnInit(){
     // this.splash.show();
      this.getLocation();
      this.getAllGauges();
      
	}

	getAllGauges(){
     console.log(this.lat);
	 
  }

 
/*
  
  getLocation(){

    var cachedRespone = 
    this.geolocation.getCurrentPosition().then((resp) => {
        this.http.get('http://liquidearthlake.org/json/getalldistances/'+ resp.coords.latitude+'/'+ resp.coords.longitude)
        .subscribe((data : any) =>
        {
         
          console.log(data);
          this.gauges=data;
          
        },
        (error : any) =>
        {
          console.log(error);
        });  
     }).catch((error) => {
       
       console.log('Error getting location', error);
       this.http.get('http://liquidearthlake.org/json/getalldistances/'+35.9049+'/'+-79.0469)
       .subscribe((data : any) =>
       {
         
         console.log(data);
         this.gauges=data;
         
       },
       (error : any) =>
       {
         console.log(error);
       });  
     });
     
 
  }
*/



getLocation(){
  console.log('Hi');



  this.geolocation.getCurrentPosition().then((resp) => {
  this.lat = resp.coords.latitude;
  this.long = resp.coords.longitude;


  let url = 'http://liquidearthlake.org/json/getalldistances/'+ this.lat +'/'+ this.long;
  let cacheKey = url;
  let request = this.http.get(url, { observe: 'response'});



  return this.cache.loadFromObservable(cacheKey, request)
  .pipe(map(res => res.body))
  .subscribe((res : any) =>
    {
      this.gauges = res;
      console.log(res);
    })

  }).catch((error) => {
        console.log('Error Getting Location', Error);
  });

}



}

