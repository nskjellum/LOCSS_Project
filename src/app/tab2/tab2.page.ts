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

  //Determines direction of column sorting.
  // 0 Sorted by Increasing Distance
  // 1 Id - Alphabetical Ascending
  // 2 Name - Alphabetical Ascending
  // 4 Descending Order - Descending Order
  // (Used for all repeat pushes of the button.)

  sortStatus:number=0;
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
  console.log('Caching User Location');



  let url = 'http://liquidearthlake.org/json/getalldistances/'+35.9049+'/'+-79.0469;
  let cacheKey = url;
  let request = this.http.get(url, { observe: 'response'});



  return this.cache.loadFromObservable(cacheKey, request)
  .pipe(map(res => res.body))
  .subscribe((res : any) =>
    {
      this.gauges = res;
      console.log(res);
    })

}

sortGauges(col) {
console.log("Sorting column by", col);


//If sortStatus is not 1, sorts by ascending, otherwise, descending.
if(col === 'gauge_id') {

    if(this.sortStatus != 1) {
        this.gauges.sort((a,b) => (b[col] < a[col])?1:-1);
        this.sortStatus = 1;
        }
    else {
        this.gauges.sort((a,b) => (b[col] > a[col])?1:-1);
        this.sortStatus = 4;
        }
}
//If sortStatus is not 2, sorts by ascending, otherwise, descending.
else if(col === 'name'){

    if(this.sortStatus != 2) {
        this.gauges.sort((a,b) => (b[col] < a[col])?1:-1);
        this.sortStatus = 2;
        }
    else {
        this.gauges.sort((a,b) => (b[col] > a[col])?1:-1);
        this.sortStatus = 4;
        }
}
//If sortStatus is not 0, sorts by ascending, otherwise, descending.
else if(col === 'distance'){

    if(this.sortStatus != 0) {
        this.gauges.sort((a,b) => (b[col] < a[col])?1:-1);
        this.sortStatus = 0;
        }
    else {
        this.gauges.sort((a,b) => (b[col] > a[col])?1:-1);
        this.sortStatus = 4;
        }
}




console.log(this.gauges);

//let a = ["9", "1" , "3" , "7" , "5"];
//a.sort((a,b) => (a > b)?1:-1);
//console.log(a);

}



}

