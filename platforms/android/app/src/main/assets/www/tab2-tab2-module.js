(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/map.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/map.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm5/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/map.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/map.js ***!
  \********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    \r\n  \r\n\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button  text=\"Back\" defaultHref=\"/tabs/tab1\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>\r\n      List of Gauges\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content no-padding>\r\n       <ion-grid>\r\n         <ion-row>\r\n           <ion-col><ion-item style=\"color:blue\" [href]=\"'/gauge-list-map'\">Map View</ion-item></ion-col>\r\n      \r\n         </ion-row>\r\n       </ion-grid>\r\n\t     <ion-grid>\r\n\r\n\r\n          <ion-row style=\"font-weight: bold;\">\r\n            <ion-col > <button (click)=\"sortGauges('gauge_id')\" > Gauge ID </button> </ion-col>\r\n            <ion-col> <button (click)=\"sortGauges('name')\" > Gauge Name </button> </ion-col>\r\n\r\n              <!-- Consider Implementing Conversion for Miles - Kilometers based on nearest Gauge -->\r\n            <ion-col> <button (click)=\"sortGauges('distance')\" > Distance (Mile) </button> </ion-col>\r\n            \r\n          </ion-row>\r\n         \r\n          <ion-row *ngFor=\"let gauge of gauges\" >\r\n          \r\n              <!-- <ion-col style=\"color: #92a8d1;border-style: solid;\r\n              border-width: 2px;\">{{gauge['gauge_id']}}</ion-col> -->\r\n              <ion-col no-padding><ion-item no-margin [href]=\"'tabs/tab3/'+gauge['id']+'/'+gauge['name']\" routerDirection=\"forward\">  <div no-margin no-padding>{{gauge['gauge_id'].slice(0,4)}}</div></ion-item></ion-col>\r\n              <ion-col no-padding><ion-item no-margin [href]=\"'tabs/tab3/'+gauge['id']+'/'+gauge['name']\" routerDirection=\"forward\">  <div no-margin no-padding>{{gauge['name']}}</div></ion-item></ion-col>\r\n             <!-- <ion-col no-padding><ion-item no-margin [href]=\"'tabs/tab3/'+gauge['id']+'/'+gauge['name']\" routerDirection=\"forward\">  <div no-margin no-padding>{{gauge['city']}}</div></ion-item></ion-col>-->\r\n              <ion-col no-padding><ion-item no-margin [href]=\"'tabs/tab3/'+gauge['id']+'/'+gauge['name']\" routerDirection=\"forward\"> {{gauge['distance']}}</ion-item></ion-col>\r\n             \r\n          </ion-row>\r\n       \r\n        </ion-grid>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var ionic_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-cache */ "./node_modules/ionic-cache/dist/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







//import  { Http } from '@angular/http';


var Tab2Page = /** @class */ (function () {
    function Tab2Page(storage, http, splash, geolocation, cache) {
        this.storage = storage;
        this.http = http;
        this.splash = splash;
        this.geolocation = geolocation;
        this.cache = cache;
        //Determines direction of column sorting.
        // 0 Sorted by Increasing Distance
        // 1 Id - Alphabetical Ascending
        // 2 Name - Alphabetical Ascending
        // 4 Descending Order - Descending Order
        // (Used for all repeat pushes of the button.)
        this.sortStatus = 0;
        this.filmsKey = 'my-films-group';
    }
    Tab2Page.prototype.ngOnInit = function () {
        // this.splash.show();
        this.getLocation();
        this.getAllGauges();
    };
    Tab2Page.prototype.getAllGauges = function () {
        console.log(this.lat);
    };
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
    Tab2Page.prototype.getLocation = function () {
        var _this = this;
        console.log('Caching User Location');
        var url = 'http://liquidearthlake.org/json/getalldistances/' + 35.9049 + '/' + -79.0469;
        var cacheKey = url;
        var request = this.http.get(url, { observe: 'response' });
        return this.cache.loadFromObservable(cacheKey, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) { return res.body; }))
            .subscribe(function (res) {
            _this.gauges = res;
            console.log(res);
        });
    };
    Tab2Page.prototype.sortGauges = function (col) {
        console.log("Sorting column by", col);
        //If sortStatus is not 1, sorts by ascending, otherwise, descending.
        if (col === 'gauge_id') {
            if (this.sortStatus != 1) {
                this.gauges.sort(function (a, b) { return (b[col] < a[col]) ? 1 : -1; });
                this.sortStatus = 1;
            }
            else {
                this.gauges.sort(function (a, b) { return (b[col] > a[col]) ? 1 : -1; });
                this.sortStatus = 4;
            }
        }
        //If sortStatus is not 2, sorts by ascending, otherwise, descending.
        else if (col === 'name') {
            if (this.sortStatus != 2) {
                this.gauges.sort(function (a, b) { return (b[col] < a[col]) ? 1 : -1; });
                this.sortStatus = 2;
            }
            else {
                this.gauges.sort(function (a, b) { return (b[col] > a[col]) ? 1 : -1; });
                this.sortStatus = 4;
            }
        }
        //If sortStatus is not 0, sorts by ascending, otherwise, descending.
        else if (col === 'distance') {
            if (this.sortStatus != 0) {
                this.gauges.sort(function (a, b) { return (b[col] < a[col]) ? 1 : -1; });
                this.sortStatus = 0;
            }
            else {
                this.gauges.sort(function (a, b) { return (b[col] > a[col]) ? 1 : -1; });
                this.sortStatus = 4;
            }
        }
        console.log(this.gauges);
        //let a = ["9", "1" , "3" , "7" , "5"];
        //a.sort((a,b) => (a > b)?1:-1);
        //console.log(a);
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__["Geolocation"], ionic_cache__WEBPACK_IMPORTED_MODULE_5__["CacheService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map