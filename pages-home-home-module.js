(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ "HjqJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_view_view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"]] }); })();


/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/view.component */ "HjqJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _view_view_component__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"] }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "HjqJ":
/*!***************************************************!*\
  !*** ./src/app/pages/home/view/view.component.ts ***!
  \***************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(); };
ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 54, vars: 0, consts: [["id", "hero", 1, "d-flex", "justify-content-center", "align-items-center"], ["data-aos", "zoom-in", "data-aos-delay", "100", 1, "container", "position-relative"], ["routerLink", "/landing/order", 1, "btn-get-started"], ["id", "main", 1, "pt-5"], ["id", "about", 1, "about"], ["data-aos", "fade-up", 1, "container"], [1, "section-title"], [1, "row"], ["data-aos", "fade-left", "data-aos-delay", "100", 1, "col-lg-6", "order-1", "order-lg-2"], ["src", "../../../../../img/hero-bg.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-6", "pt-4", "pt-lg-0", "order-2", "order-lg-1", "content"], [1, "font-italic"], [1, "learn-more-btn"], [1, "row", "content"], [1, "col-lg-6"], [1, "ri-check-double-line"], [1, "col-lg-6", "pt-4", "pt-lg-0"], [1, "btn-learn-more"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Learning Today,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Leading Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We are team of talented designers making websites by X_Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " X_Team is a company specialized in developing and designing websites, graphics designs and video motion in modern ways and methods And the media production business ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Experience in designing and developing websites with high quality ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Experience in graphic and video motion designs at the hands of professional experts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Experience in media production with very modern methods and methods ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " We rely on simplicity, speed, accuracy and sophistication in implementing business, as we put in our priorities the opinions of customers and users before implementation and planning. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "See More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#hero[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 80vh;\r\n  background: url('hero-bg.jpg') top center;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n\r\n\r\n#hero[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  background: rgba(0, 0, 0, 0.4);\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  padding-top: 72px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 992px) {\r\n  #hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    padding-top: 62px;\r\n  }\r\n}\r\n\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 48px;\r\n  font-weight: 700;\r\n  line-height: 56px;\r\n  color: #fff;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: #eee;\r\n  margin: 10px 0 0 0;\r\n  font-size: 24px;\r\n}\r\n\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   .btn-get-started[_ngcontent-%COMP%] {\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  letter-spacing: 1px;\r\n  display: inline-block;\r\n  padding: 10px 35px;\r\n  border-radius: 50px;\r\n  transition: 0.5s;\r\n  margin-top: 30px;\r\n  border: 2px solid #fff;\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   .btn-get-started[_ngcontent-%COMP%]:hover {\r\n  background: #5fcf80;\r\n  border: 2px solid #5fcf80;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 1024px) {\r\n  #hero[_ngcontent-%COMP%] {\r\n    background-attachment: fixed;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n  #hero[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n  }\r\n  #hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    line-height: 36px;\r\n  }\r\n  #hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    line-height: 24px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  font-size: 26px;\r\n}\r\n\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  padding-right: 4px;\r\n  color: #5fcf80;\r\n}\r\n\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .learn-more-btn[_ngcontent-%COMP%] {\r\n  background: #5fcf80;\r\n  color: #fff;\r\n  border-radius: 50px;\r\n  padding: 8px 25px 9px 25px;\r\n  white-space: nowrap;\r\n  transition: 0.3s;\r\n  font-size: 14px;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .learn-more-btn[_ngcontent-%COMP%]:hover {\r\n  background: #3ac162;\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .learn-more-btn[_ngcontent-%COMP%] {\r\n    margin: 0 48px 0 0;\r\n    padding: 6px 18px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUNBQTREO0VBQzVELHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7Ozs7QUFJQTtFQUNFLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7QUFDVjs7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOzs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtDQUFrQztBQUNwQzs7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOzs7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOzs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOzs7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGOzs7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtBQUNGOzs7O0FBR0EsVUFBVTs7OztBQUVWO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7Ozs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7Ozs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOzs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOzs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOzs7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVybyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2ltZy9oZXJvLWJnLmpwZ1wiKSB0b3AgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuXHJcbiNoZXJvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuI2hlcm8gLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDcycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICNoZXJvIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDYycHg7XHJcbiAgfVxyXG59XHJcblxyXG4jaGVybyBoMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2hlcm8gaDIge1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbiNoZXJvIC5idG4tZ2V0LXN0YXJ0ZWQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI2hlcm8gLmJ0bi1nZXQtc3RhcnRlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzVmY2Y4MDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNWZjZjgwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgI2hlcm8ge1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNoZXJvIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gICNoZXJvIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gIH1cclxuICAjaGVybyBoMiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBhYm91dCAqL1xyXG5cclxuLmFib3V0IC5jb250ZW50IGgzIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLmFib3V0IC5jb250ZW50IHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5hYm91dCAuY29udGVudCB1bCBsaSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5hYm91dCAuY29udGVudCB1bCBpIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIGNvbG9yOiAjNWZjZjgwO1xyXG59XHJcblxyXG4uYWJvdXQgLmNvbnRlbnQgLmxlYXJuLW1vcmUtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjNWZjZjgwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogOHB4IDI1cHggOXB4IDI1cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5hYm91dCAuY29udGVudCAubGVhcm4tbW9yZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzYWMxNjI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5hYm91dCAuY29udGVudCAubGVhcm4tbW9yZS1idG4ge1xyXG4gICAgbWFyZ2luOiAwIDQ4cHggMCAwO1xyXG4gICAgcGFkZGluZzogNnB4IDE4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map