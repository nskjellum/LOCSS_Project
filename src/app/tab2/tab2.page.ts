import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Observable } from 'rxjs/Observable'
import { CacheService } from 'ionic-cache';
import 'rxjs/add/operator/map';
//import  { Http } from '@angular/http';
import { Storage } from '@ionic/storage';


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
  url ;//= 'http://liquidearthlake.org/json/getalldistances/'+35.9049+'/'+-79.0469;
  
  //Tab1Page: any;

	constructor(private storage: Storage, private http: HttpClient, private splash:SplashScreen,private geolocation:Geolocation, private cache: CacheService){}

	ngOnInit(){
      this.splash.show();
    this.getLocation();
      this.getAllGauges();
      this.url = 'http://liquidearthlake.org/json/getalldistances/'+35.9049+'/'+-79.0469;
     // this.splash.hide();
   //   console.log( this.tab1page.getBeerList().subscribe(res => (this.beers = res))  );
	}

	getAllGauges(){
     console.log(this.lat);
	 
  }

 
  
  
  getLocation(){
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


/*

getLocation(){
  console.log('Hi');
  let url = 'http://liquidearthlake.org/json/getalldistances/'+35.9049+'/'+-79.0469;
  let cacheKey = url;
  let request = this.http.get(url, { observe: 'response'});

  return this.cache.loadFromObservable(cacheKey, request);
 
  console.log(this.url);
  // Or to get a key/value pair
  this.storage.get('age').then((val) => {
    
    val = this.gauges;
    console.log(val);
  });

}
*/


}

