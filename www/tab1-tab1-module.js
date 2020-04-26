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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Add Measurement\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content padding class = \"background-image\"> -->\r\n<ion-content>\r\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" >\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Gauge ID</ion-label>\r\n        <ion-select  [(ngModel)]=\"nearestGaugeIncID\" name=\"gauge_inc_id\" required>\r\n          <ion-select-option *ngFor=\"let gauge of gauges\" value=\"{{gauge.id}}\">{{gauge.gauge_id + ' - ' + gauge.name + ' - ' + gauge.city}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Height (centimeters)</ion-label>\r\n        <ion-input type=\"number\" ngModel name=\"height\" required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Date</ion-label>\r\n        <ion-input type=\"date\" [(ngModel)]=\"date\" name=\"date\"  required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Time</ion-label>\r\n        <ion-input type=\"time\" [(ngModel)]=\"time\" name=\"time\" required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" >Is Bubble Level Okay?</ion-label>\r\n        <ion-select [(ngModel)]=\"isBubbleLevelOkay\" name=\"is_bubble_level_okay\" required>\r\n          <ion-select-option value=\"Yes\" selected>Yes</ion-select-option>\r\n          <ion-select-option value=\"No\">No</ion-select-option>\r\n          <ion-select-option value=\"I Do Not Know\">I Don't Know</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" >Notes</ion-label>\r\n        <ion-input type=\"textarea\" ngModel name=\"notes\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled] =\"!f.valid\">Add Measurement</ion-button>\r\n  </form>\r\n\r\n\r\n\r\n\r\n  <ion-button [href]=\"'/gauge-list-map'\" expand =\"block\">Map View</ion-button>\r\n\r\n\r\n  <button ion-button (click) = \"launchSecondPage()\">next</button>\r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red; }\n\n/*\r\n  .background-image {\r\n    --background: url('dashboard-2.png');\r\n}  \r\n*/\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold; }\n\n#map {\n  width: 100%;\n  height: 100%; }\n\n.map-wrapper {\n  position: relative; }\n\n.map-wrapper #map_center {\n    position: absolute;\n    z-index: 99;\n    height: 40px;\n    width: 40px;\n    top: 50%;\n    left: 50%;\n    margin-left: -21px;\n    margin-top: -41px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXERpcGF5YW4gQmFuaWtcXERlc2t0b3BcXExPQ1NTX0lPTklDL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLHFCQUFxQixFQUFBOztBQUd6Qjs7OztDQ0VDOztBRElDO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRHBCO0lBSUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jbWFwX2NhbnZhcyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG5cclxuLypcclxuICAuYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnZGFzaGJvYXJkLTIucG5nJyk7XHJcbn0gIFxyXG4qL1xyXG4gXHJcbiAgI2FkZHJlc3Mge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAgXHJcbiAgI21hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgIFxyXG4gIC5tYXAtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIFxyXG4gICAgI21hcF9jZW50ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTIxcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC00MXB4O1xyXG4gICAgfVxyXG4gIH1cclxuIiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4jbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH1cblxuLypcclxuICAuYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnZGFzaGJvYXJkLTIucG5nJyk7XHJcbn0gIFxyXG4qL1xuI2FkZHJlc3Mge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5tYXAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAubWFwLXdyYXBwZXIgI21hcF9jZW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgICBtYXJnaW4tdG9wOiAtNDFweDsgfVxuIl19 */"

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








var URL = 'http://liquidearthlake.org/json/getalldistances/' + 35.9049 + '/' + -79.0469;
var Tab1Page = /** @class */ (function () {
    function Tab1Page(geolocation, alertController, http, toastCtrl, router, navCtrl) {
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.router = router;
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
    Tab1Page.prototype.launchSecondPage = function () {
        console.log('HEKLLO');
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
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Data submitted successfuly',
                            duration: 2000,
                            position: "bottom"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.nearestGauge = this.gauges.filter(function (m) { return m.id == form.value['gauge_inc_id']; });
                        console.log(form);
                        this.http.post("http://liquidearthlake.org/json/reading/store", form.value)
                            .subscribe(function (data) {
                            console.log(data['_body']);
                        }, function (error) {
                            console.log(error);
                        });
                        console.log(this.gauges);
                        console.log(this.nearestGauge[0].gauge_id);
                        this.router.navigateByUrl('tabs/tab3/' + form.value['gauge_inc_id'] + '/' + this.nearestGauge[0].gauge_id);
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map