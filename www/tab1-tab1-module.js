(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _offline_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offline-manager.service */ "./src/app/services/offline-manager.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var API_STORAGE_KEY = 'specialkey';
var API_URL = 'https://reqres.in/api';
var ApiService = /** @class */ (function () {
    function ApiService(http, networkService, storage, offlineManager) {
        this.http = http;
        this.networkService = networkService;
        this.storage = storage;
        this.offlineManager = offlineManager;
    }
    ApiService.prototype.ngOnInit = function () {
    };
    ApiService.prototype.handleRequest = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.offlineManager.storeRequest(data);
                return [2 /*return*/];
            });
        });
    };
    ApiService.prototype.getRequest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.offlineManager.retrieveRequest()];
            });
        });
    };
    ApiService.prototype.clearStorage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.offlineManager.clearAll()];
            });
        });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _offline_manager_service__WEBPACK_IMPORTED_MODULE_1__["OfflineManagerService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Add Measurement\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content padding class = \"background-image\"> -->\r\n<ion-content>\r\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" >\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Gauge ID</ion-label>\r\n        <ion-select  [(ngModel)]=\"nearestGaugeIncID\" name=\"gauge_inc_id\" required>\r\n          <ion-select-option *ngFor=\"let gauge of gauges\" value=\"{{gauge.id}}\">{{gauge.gauge_id + ' - ' + gauge.name + ' - ' + gauge.city}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Height (centimeters)</ion-label>\r\n        <ion-input type=\"number\" ngModel name=\"height\" required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Date</ion-label>\r\n        <ion-input type=\"date\" [(ngModel)]=\"date\" name=\"date\"  required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Time</ion-label>\r\n        <ion-input type=\"time\" [(ngModel)]=\"time\" name=\"time\" required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" >Is Bubble Level Okay?</ion-label>\r\n        <ion-select [(ngModel)]=\"isBubbleLevelOkay\" name=\"is_bubble_level_okay\" required>\r\n          <ion-select-option value=\"Yes\" selected>Yes</ion-select-option>\r\n          <ion-select-option value=\"No\">No</ion-select-option>\r\n          <ion-select-option value=\"I Do Not Know\">I Don't Know</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" >Notes</ion-label>\r\n        <ion-input type=\"textarea\" ngModel name=\"notes\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled] =\"!f.valid\">Add Measurement</ion-button>\r\n   <!-- <ion-button click= \"presentAlert();\" color=\"primary\" expand=\"block\" [disabled] =\"!f.valid\">Report a problem</ion-button>-->\r\n  </form>\r\n\r\n\r\n\r\n\r\n  <ion-button [href]=\"'/gauge-list-map'\" expand =\"block\">Map View</ion-button>\r\n  <ion-button (click)= \"presentAlert()\" expand = \"block\" color=\"danger\">Report a problem</ion-button>\r\n\r\n\r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red; }\n\n/*\r\n  .background-image {\r\n    --background: url('dashboard-2.png');\r\n}  \r\n*/\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold; }\n\n#map {\n  width: 100%;\n  height: 100%; }\n\n.map-wrapper {\n  position: relative; }\n\n.map-wrapper #map_center {\n    position: absolute;\n    z-index: 99;\n    height: 40px;\n    width: 40px;\n    top: 50%;\n    left: 50%;\n    margin-left: -21px;\n    margin-top: -41px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXG5za2plXFxBbmRyb2lkU3R1ZGlvUHJvamVjdHNcXExPQ1NTX1Byb2plY3Qvc3JjXFxhcHBcXHRhYjFcXHRhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBR3pCOzs7O0NDRUM7O0FESUM7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7SUFJSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNtYXBfY2FudmFzIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcblxyXG4vKlxyXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCdkYXNoYm9hcmQtMi5wbmcnKTtcclxufSAgXHJcbiovXHJcbiBcclxuICAjYWRkcmVzcyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gICBcclxuICAjbWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAgXHJcbiAgLm1hcC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgXHJcbiAgICAjbWFwX2NlbnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTQxcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfVxuXG4vKlxyXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCdkYXNoYm9hcmQtMi5wbmcnKTtcclxufSAgXHJcbiovXG4jYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLm1hcC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5tYXAtd3JhcHBlciAjbWFwX2NlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICAgIG1hcmdpbi10b3A6IC00MXB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
//












//
var URL = 'http://liquidearthlake.org/json/getalldistances/' + 35.9049 + '/' + -79.0469;
var Tab1Page = /** @class */ (function () {
    function Tab1Page(geolocation, alertController, http, toastCtrl, router, emailcomposer, navCtrl, networkService, network, apiService) {
        //subscribes to network to send all requests on connect
        //this.network.onConnect().subscribe(() => {
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.emailcomposer = emailcomposer;
        this.navCtrl = navCtrl;
        this.networkService = networkService;
        this.network = network;
        this.apiService = apiService;
        this.gauges = [];
        this.value = 0;
        //        this.sendSaved();
        //     });
    }
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.getCurrentDateTime();
        this.getAllGauges();
        this.getLocation();
        if (!this.isGeoLocationFound) {
            //this.presentAlertPrompt();
        }
        else {
        }
        this.network.onConnect().subscribe(function () {
            _this.sendSaved();
        });
    };
    Tab1Page.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'SUBMIT',
                                    handler: function (data) {
                                        _this.gauge_data = data.gauge_id;
                                        _this.problem_data = data.problem;
                                        console.log(_this.gauge_data);
                                        console.log(_this.problem_data);
                                        var email = {
                                            to: 'dipayan5175@gmail.com',
                                            subject: 'LOCSS App Issue',
                                            body: 'Gauge ID: ' + _this.gauge_data + '  Problem: ' + _this.problem_data,
                                            isHTML: true
                                        };
                                        console.log(email);
                                        console.log('Successfully updated');
                                        _this.emailcomposer.open(email);
                                        console.log('Successfully sent');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.getCurrentDateTime = function () {
        var date = new Date();
        this.date = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
        this.time = moment__WEBPACK_IMPORTED_MODULE_5__().format('HH:mm');
        this.isBubbleLevelOkay = "Yes";
        console.log(this.date);
        console.log(this.time);
    };
    // Get The  Geolocation
    Tab1Page.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.isGeoLocationFound = true;
            _this.http.get('http://liquidearthlake.org/json/getnearestgauge/' + resp.coords.latitude + '/' + resp.coords.longitude)
                .subscribe(function (data) {
                console.log(data);
                _this.nearestGauge = data;
                _this.nearestGaugeID = data.gauge_id;
                _this.nearestGaugeIncID = data.id;
                console.log(_this.nearestGaugeIncID);
            }, function (error) {
                console.log(error);
            });
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
            _this.isGeoLocationFound = false;
            console.log('Error getting location', error);
        });
    };
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
    Tab1Page.prototype.getAllGauges = function () {
        var _this = this;
        this.http.get('http://liquidearthlake.org/json/gauges')
            .subscribe(function (data) {
            _this.gauges = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    Tab1Page.prototype.onSubmit = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var status, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = this.networkService.getCurrentNetworkStatus();
                        if (!(status === src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__["ConnectionStatus"].Online)) return [3 /*break*/, 2];
                        console.log('Connected to Network. Submitting Information');
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Data submitted successfuly',
                                duration: 2000,
                                position: "bottom"
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.nearestGauge = this.gauges.filter(function (m) { return m.id == form.value['ga   uge_inc_id']; });
                        console.log(form);
                        //API CALL
                        console.log('Check Console Here');
                        console.log(form.value);
                        this.http.post("http://liquidearthlake.org/json/reading/store", form.value)
                            .subscribe(function (data) {
                            console.log(data['_body']);
                        }, function (error) {
                            console.log(error);
                        });
                        console.log(this.gauges);
                        console.log(this.nearestGauge[0].gauge_id);
                        this.router.navigateByUrl('tabs/tab3/' + form.value['gauge_inc_id'] + '/' + this.nearestGauge[0].gauge_id);
                        return [3 /*break*/, 3];
                    case 2:
                        console.log('Not connected to Network. Saving submission.');
                        // Method to Store Data in Ionic Storage
                        // This data must be retrieved whenever the app goes online.
                        this.apiService.handleRequest(form.value);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.sendSaved = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Sending any saved requests.');
                        this.apiService.getRequest().then(function (result) {
                            if (result != null) {
                                //API CALL
                                console.log('Sending non-null request');
                                console.log(result);
                                console.log('Data JSON Form');
                                console.log(JSON.stringify({ result: result }));
                                _this.http.post("http://liquidearthlake.org/json/reading/store", JSON.stringify({ result: result }))
                                    .subscribe(function (data) {
                                    console.log(data['_body']);
                                }, function (error) {
                                    console.log(error);
                                });
                                console.log('Request Sent');
                                _this.apiService.clearStorage();
                            }
                        });
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Offline Requests Successfully Sent',
                                duration: 2000,
                                position: "bottom"
                            })];
                    case 1:
                        toast = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map