(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");







var routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
    }
];
var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.html":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img src = \"https://www.locss.org/theme/images/logo.svg\"/>\n      LOCSS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"background\">\n  <ion-card class=\"card\">\n \n   \n    <ion-card-header>\n      \n      <ion-card-title></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-text>\n          <h1 class=\"h1class\">The Lake Observations by Citizen Scientists & Satellites project seeks to\n             better understand how the quanity of water in lakes is changing.</h1>\n            <br><br>\n             <p class =\"para\">This NASA-funded project is a collaboration between the Department of Geological Sciences at UNC-Chapel Hill, the UNC Institute for the Environment's Center for Public Engagement with Science, University of Washington Department of Civil and Environmental Engineering, and Tennessee Technological University Department of Computer Science.</p>\n      </ion-text>\n      </ion-card-content>\n   \n      </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url(https://www.locss.org/uploads/assets/_full/east-loon.JPG) 0 0/100% 100% no-repeat; }\n\n.card {\n  background-color: #5aa3d2; }\n\n.card2 {\n  background-color: #001429; }\n\n.h1class {\n  font-size: 1.75rem;\n  font-family: 'PT Sans', sans-serif;\n  font-weight: bold;\n  color: #f8f9fa !important; }\n\n.para {\n  font-size: 1.50rem;\n  font-family: 'PT Sans', sans-serif;\n  color: #e6e6e6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC9DOlxcVXNlcnNcXERpcGF5YW4gQmFuaWtcXERlc2t0b3BcXExPQ1NTX0lPTklDL3NyY1xcYXBwXFx0YWI0XFx0YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1HQUFhLEVBQUE7O0FBR2pCO0VBRUkseUJBQXdCLEVBQUE7O0FBSTVCO0VBRUkseUJBQXlCLEVBQUE7O0FBRzdCO0VBRUksa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIseUJBQXdCLEVBQUE7O0FBSTVCO0VBRUksa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuXHJcbiAgICAtLWJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5sb2Nzcy5vcmcvdXBsb2Fkcy9hc3NldHMvX2Z1bGwvZWFzdC1sb29uLkpQRykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5jYXJke1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IzVhYTNkMjtcclxuXHJcbn1cclxuXHJcbi5jYXJkMntcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNDI5O1xyXG59XHJcblxyXG4uaDFjbGFzc3tcclxuXHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2Y4ZjlmYSFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ucGFyYXtcclxuXHJcbiAgICBmb250LXNpemU6IDEuNTByZW07XHJcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNlNmU2ZTY7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab4Page = /** @class */ (function () {
    function Tab4Page() {
    }
    Tab4Page.prototype.ngOnInit = function () {
    };
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/tab4/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map