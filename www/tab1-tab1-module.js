(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

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

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red; }\n\n/*\r\n  .background-image {\r\n    --background: url('dashboard-2.png');\r\n}  \r\n*/\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold; }\n\n#map {\n  width: 100%;\n  height: 100%; }\n\n.map-wrapper {\n  position: relative; }\n\n.map-wrapper #map_center {\n    position: absolute;\n    z-index: 99;\n    height: 40px;\n    width: 40px;\n    top: 50%;\n    left: 50%;\n    margin-left: -21px;\n    margin-top: -41px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXG5za2plXFxEb2N1bWVudHNcXEdpdEh1YlxcTE9DU1NfUHJvamVjdC9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTs7QUFHekI7Ozs7Q0NFQzs7QURJQztFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQixFQUFBOztBQURwQjtJQUlJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI21hcF9jYW52YXMge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuXHJcbi8qXHJcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJ2Rhc2hib2FyZC0yLnBuZycpO1xyXG59ICBcclxuKi9cclxuIFxyXG4gICNhZGRyZXNzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgIFxyXG4gICNtYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gICBcclxuICAubWFwLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBcclxuICAgICNtYXBfY2VudGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNDFweDtcclxuICAgIH1cclxuICB9XHJcbiIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkOyB9XG5cbi8qXHJcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJ2Rhc2hib2FyZC0yLnBuZycpO1xyXG59ICBcclxuKi9cbiNhZGRyZXNzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLm1hcC13cmFwcGVyICNtYXBfY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gICAgbWFyZ2luLXRvcDogLTQxcHg7IH1cbiJdfQ== */"

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
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");










var URL = 'http://liquidearthlake.org/json/getalldistances/' + 35.9049 + '/' + -79.0469;
var Tab1Page = /** @class */ (function () {
    function Tab1Page(networkService, geolocation, alertController, http, toastCtrl, router, emailcomposer, navCtrl) {
        this.networkService = networkService;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.emailcomposer = emailcomposer;
        this.navCtrl = navCtrl;
        this.gauges = [];
        this.value = 0;
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.getCurrentDateTime();
        this.getAllGauges();
        this.getLocation();
        if (!this.isGeoLocationFound) {
            //this.presentAlertPrompt();
        }
        else {
        }
        //this.getLocation();
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
    Tab1Page.prototype.getCurrentNetwork = function () {
        //let NetworkService = new networkService();
        // console.log('Network Test');
    };
    Tab1Page.prototype.getCurrentDateTime = function () {
        var date = new Date();
        this.date = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD');
        this.time = moment__WEBPACK_IMPORTED_MODULE_6__().format('HH:mm');
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
            var status, toast, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = this.networkService.getCurrentNetworkStatus();
                        if (!(status === src_app_services_network_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Online)) return [3 /*break*/, 2];
                        console.log('Connected to Network. Submitting Information');
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Data submitted successfuly',
                                duration: 2000,
                                position: "bottom"
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.nearestGauge = this.gauges.filter(function (m) { return m.id == form.value['gauge_inc_id']; });
                        console.log(form);
                        //API CALL
                        this.http.post("http://liquidearthlake.org/json/reading/store", form.value)
                            .subscribe(function (data) {
                            console.log(data['_body']);
                        }, function (error) {
                            console.log(error);
                        });
                        console.log(this.gauges);
                        console.log(this.nearestGauge[0].gauge_id);
                        this.router.navigateByUrl('tabs/tab3/' + form.value['gauge_inc_id'] + '/' + this.nearestGauge[0].gauge_id);
                        return [3 /*break*/, 4];
                    case 2:
                        console.log('Not connected to Network. Saving submission.');
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Data will submit when connected to network',
                                duration: 2000,
                                position: "bottom"
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__["EmailComposer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map