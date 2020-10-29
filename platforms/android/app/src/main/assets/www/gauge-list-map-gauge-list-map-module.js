(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gauge-list-map-gauge-list-map-module"],{

/***/ "./src/app/gauge-list-map/gauge-list-map.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/gauge-list-map/gauge-list-map.module.ts ***!
  \*********************************************************/
/*! exports provided: GaugeListMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeListMapPageModule", function() { return GaugeListMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _gauge_list_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gauge-list-map.page */ "./src/app/gauge-list-map/gauge-list-map.page.ts");







var routes = [
    {
        path: '',
        component: _gauge_list_map_page__WEBPACK_IMPORTED_MODULE_6__["GaugeListMapPage"]
    }
];
var GaugeListMapPageModule = /** @class */ (function () {
    function GaugeListMapPageModule() {
    }
    GaugeListMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_gauge_list_map_page__WEBPACK_IMPORTED_MODULE_6__["GaugeListMapPage"]]
        })
    ], GaugeListMapPageModule);
    return GaugeListMapPageModule;
}());



/***/ }),

/***/ "./src/app/gauge-list-map/gauge-list-map.page.html":
/*!*********************************************************!*\
  !*** ./src/app/gauge-list-map/gauge-list-map.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  \r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button text=\"Back\" defaultHref=\"/tabs/tab2\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>\r\n      List of Gauges\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  \r\n<div #map id=\"map\"></div> \r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/gauge-list-map/gauge-list-map.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/gauge-list-map/gauge-list-map.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red; }\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold; }\n\n#map {\n  width: 100%;\n  height: 100%; }\n\n.map-wrapper {\n  position: relative; }\n\n.map-wrapper #map_center {\n    position: absolute;\n    z-index: 99;\n    height: 40px;\n    width: 40px;\n    top: 50%;\n    left: 50%;\n    margin-left: -21px;\n    margin-top: -41px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2F1Z2UtbGlzdC1tYXAvQzpcXFVzZXJzXFxuc2tqZVxcQW5kcm9pZFN0dWRpb1Byb2plY3RzXFxMT0NTU19Qcm9qZWN0L3NyY1xcYXBwXFxnYXVnZS1saXN0LW1hcFxcZ2F1Z2UtbGlzdC1tYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBSXZCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRHBCO0lBSUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2F1Z2UtbGlzdC1tYXAvZ2F1Z2UtbGlzdC1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAjbWFwX2NhbnZhcyB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAjYWRkcmVzcyB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAjbWFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgICBcclxuICAgIC5tYXAtd3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBcclxuICAgICAgI21hcF9jZW50ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDFweDtcclxuICAgICAgfVxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/gauge-list-map/gauge-list-map.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/gauge-list-map/gauge-list-map.page.ts ***!
  \*******************************************************/
/*! exports provided: GaugeListMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeListMapPage", function() { return GaugeListMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");







var GaugeListMapPage = /** @class */ (function () {
    function GaugeListMapPage(loadingcontrl, splash, geolocation, platform, http, navctrl, router) {
        this.loadingcontrl = loadingcontrl;
        this.splash = splash;
        this.geolocation = geolocation;
        this.platform = platform;
        this.http = http;
        this.navctrl = navctrl;
        this.router = router;
        this.location = { lat: null, lng: null };
    }
    GaugeListMapPage.prototype.ngOnInit = function () {
        console.log("Ionview");
        //this.splash.show();
        this.addMarkerToMap();
        this.locate();
        //this.loading.dismissAll();
        this.splash.hide();
    };
    GaugeListMapPage.prototype.locate = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.isGeoLocationFound = true;
            console.log('Current Position: ', resp.coords.latitude, resp.coords.longitude);
            //  let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.location.lat = resp.coords.latitude;
            _this.location.lng = resp.coords.longitude;
            console.log(_this.location);
            _this.mapOptions = {
                center: _this.location,
                zoom: 8,
                mapTypeControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                eneableHighAccuracy: true
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, _this.mapOptions);
            _this.addMarkerToMap();
        }).catch(function (error) {
            _this.isGeoLocationFound = false;
            console.log('Error getting location', error);
        });
    };
    // Main code: Written by Arman
    /*
    locate(){
    
    
            
          //console.log(resp.coords.latitude);
         //let latLng = new google.maps.LatLng(this.resp.coords.latitude, this.resp.coords.longitude);
         //console.log(latLng);
         // let latLng = new google.maps.LatLng(36.183670857, -85.5016);
          //console.log(latLng);
          let mapOptions = {
            
           // center:latLng,
           center: {lat: 35.1085, lng:-77.0441},
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
        
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }
    */
    GaugeListMapPage.prototype.addMarkerToMap = function () {
        var _this = this;
        this.http.get('http://liquidearthlake.org/json/gauges')
            .subscribe(function (gauges) {
            console.log(gauges);
            for (var i = 0; i < gauges.length; i++) {
                var label = gauges[i].gauge_id + ":" + gauges[i].name;
                _this.addMarker(Number(gauges[i].latitude), Number(gauges[i].longitude), label, gauges[i].id, gauges[i].name);
                //console.log("success",label);
            }
        }, function (error) {
            console.log(error);
        });
    };
    GaugeListMapPage.prototype.addMarker = function (lat, lng, label, id, name) {
        var _this = this;
        var coords = { lat: lat, lng: lng };
        console.log(coords);
        var marker = new google.maps.Marker({
            position: coords,
            map: this.map
        });
        var infoWindow = new google.maps.InfoWindow({
            content: label
        });
        /*marker.addListener("click",function () {
            infoWindow.open(this.map,marker);
        });
        marker.addListener("mouseout",function () {
            infoWindow.close();
        });*/
        console.log('tabs/tab3/' + id + '/' + name);
        marker.addListener('click', function () {
            _this.router.navigateByUrl('tabs/tab3/' + id + '/' + name);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GaugeListMapPage.prototype, "mapElement", void 0);
    GaugeListMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gauge-list-map',
            template: __webpack_require__(/*! ./gauge-list-map.page.html */ "./src/app/gauge-list-map/gauge-list-map.page.html"),
            styles: [__webpack_require__(/*! ./gauge-list-map.page.scss */ "./src/app/gauge-list-map/gauge-list-map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], GaugeListMapPage);
    return GaugeListMapPage;
}());



/***/ })

}]);
//# sourceMappingURL=gauge-list-map-gauge-list-map-module.js.map