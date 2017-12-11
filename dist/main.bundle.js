webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_poc_poc_component__ = __webpack_require__("../../../../../src/app/components/poc/poc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_poc_service_client__ = __webpack_require__("../../../../../src/app/services/poc.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_movie_movie_component__ = __webpack_require__("../../../../../src/app/components/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_movie_service_client__ = __webpack_require__("../../../../../src/app/services/movie.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_index_index_component__ = __webpack_require__("../../../../../src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/components/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_admin_auth_service__ = __webpack_require__("../../../../../src/app/services/admin.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_moderator_auth_service__ = __webpack_require__("../../../../../src/app/services/moderator.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_moderator_moderator_component__ = __webpack_require__("../../../../../src/app/components/moderator/moderator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_poc_poc_component__["a" /* POCComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_movie_movie_component__["a" /* MovieComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_moderator_moderator_component__["a" /* ModeratorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_poc_service_client__["a" /* PocServiceClient */], __WEBPACK_IMPORTED_MODULE_11__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_12__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_review_service_client__["a" /* ReviewServiceClient */], __WEBPACK_IMPORTED_MODULE_18__services_movie_service_client__["a" /* MovieServiceClient */],
            __WEBPACK_IMPORTED_MODULE_21__services_admin_auth_service__["a" /* AdminAuthGuard */], __WEBPACK_IMPORTED_MODULE_22__services_moderator_auth_service__["a" /* ModeratorAuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_poc_poc_component__ = __webpack_require__("../../../../../src/app/components/poc/poc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_movie_movie_component__ = __webpack_require__("../../../../../src/app/components/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_index_index_component__ = __webpack_require__("../../../../../src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/components/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_admin_auth_service__ = __webpack_require__("../../../../../src/app/services/admin.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_moderator_moderator_component__ = __webpack_require__("../../../../../src/app/components/moderator/moderator.component.ts");
/**
 * Created by sesha on 7/26/17.
 */













var APP_ROUTES = [
    { path: 'poc', component: __WEBPACK_IMPORTED_MODULE_1__components_poc_poc_component__["a" /* POCComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_index_index_component__["a" /* IndexComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthGuard */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_admin_auth_service__["a" /* AdminAuthGuard */]] },
    { path: 'movie/:movieId', component: __WEBPACK_IMPORTED_MODULE_8__components_movie_movie_component__["a" /* MovieComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'userprofile/:userId', component: __WEBPACK_IMPORTED_MODULE_10__components_userprofile_userprofile_component__["a" /* UserprofileComponent */] },
    { path: 'moderator', component: __WEBPACK_IMPORTED_MODULE_12__components_moderator_moderator_component__["a" /* ModeratorComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid custom-center-container\">\n\n    <nav class=\"navbar navbar-fixed-top navbar-custom\">\n        <div class=\"container-fluid\">\n            <a class=\"navbar-brand pull-left\" [routerLink]=\"['/home']\">\n                <span\n                        class=\"glyphicon glyphicon-home pull-left glyph-color\">\n\n                </span>\n            </a>\n            <a class=\"navbar-brand pull-right\" (click)=\"logout()\" [routerLink]=\"['/home']\">\n                <span\n                        class=\"glyphicon glyphicon-log-out pull-right glyph-color\" (click)=\"logout()\"> Logout</span>\n\n            </a>\n        </div>\n    </nav>\n</div>\n\n<h2 class=\"top-margin\">\n  Welcome to Admin Page\n</h2>\n\n\n    <div class=\"col-md-6\">\n    <h1>Manage Users</h1>\n\n    <ul class=\"list-group\">\n        <li class=\"list-group-item list-header\">\n            <div class=\"row\">\n                <div class=\"col-xs-4\">\n                    <label for=\"email\">Email</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label for=\"firstname\">First Name</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label for=\"lastName\">Last Name</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label for=\"role\">Role</label>\n                </div>\n                <div class=\"col-xs-1\">\n\n                </div>\n                <div class=\"col-xs-1\">\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-4\">\n                    <input  [(ngModel)]=\"email\"\n                           id=\"email\"\n                           class=\"form-control\" />\n                </div>\n                <div class=\"col-xs-2\">\n                    <input  [(ngModel)]=\"firstName\"\n                           id=\"firstname\"\n                           class=\"form-control\" />\n                </div>\n                <div class=\"col-xs-2\">\n                    <input  [(ngModel)]=\"lastName\"\n                            id=\"lastName\"\n                            class=\"form-control\" />\n                </div>\n                <div class=\"col-xs-2\">\n                    <input  [(ngModel)]=\"role\"\n                           id=\"role\"\n                           class=\"form-control\" />\n                </div>\n                <div class=\"col-xs-1\">\n                    <span (click)=\"createUser()\"\n                          class=\"glyphicon glyphicon-plus pull-right\"></span>\n                </div>\n                <div class=\"col-xs-1\">\n                    <a [routerLink]=\"['/admin']\">\n                    <span (click)=\"updateUser()\"\n                          class=\"glyphicon glyphicon-ok pull-right\"></span></a>\n                </div>\n            </div>\n        </li>\n        <li *ngFor=\"let user of users\"  class=\"list-group-item\">\n            <div class=\"row\">\n                <div class=\"col-xs-4\">\n                    {{user.email}}\n                </div>\n                <div class=\"col-xs-2\">\n                    {{user.firstName}}\n                </div>\n                <div class=\"col-xs-2\">\n                    {{user.lastName}}\n                </div>\n                <div class=\"col-xs-2\">\n                    {{user.role}}\n                </div>\n                <div class=\"col-xs-1\">\n                    <span (click)=\"selectUser(user._id)\"\n                          class=\"glyphicon glyphicon-pencil pull-right\"></span>\n                </div>\n                <div class=\"col-xs-1\">\n                    <span (click)=\"deleteUser(user._id)\"\n                          class=\"glyphicon glyphicon-remove red-color pull-right\"></span>\n                </div>\n            </div>\n\n        </li>\n    </ul>\n    </div>\n\n\n    <div class=\"col-md-6\">\n        <h1>Manage Reviews</h1>\n\n        <ul class=\"list-group\">\n            <li class=\"list-group-item list-header\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <label for=\"email\">Owner Id</label>\n                    </div>\n                    <div class=\"col-xs-4\">\n                        <label for=\"firstname\">Review</label>\n                    </div>\n                    <div class=\"col-xs-2\">\n\n                    </div>\n                </div>\n            <li *ngFor=\"let review of allReviews\"  class=\"list-group-item\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <a [routerLink]=\"['/userprofile',review.ownerId]\">{{review.ownerId}}</a>\n                    </div>\n                    <div class=\"col-xs-4\">\n                        {{review.review}}\n                    </div>\n                    <div class=\"col-xs-2\">\n                    <span (click)=\"deleteReview(review._id)\"\n                          class=\"glyphicon glyphicon-remove red-color pull-right\"></span>\n                    </div>\n                </div>\n\n            </li>\n        </ul>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(router, userService, reviewService) {
        this.router = router;
        this.userService = userService;
        this.reviewService = reviewService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers()
            .subscribe(function (users) {
            _this.users = users;
        }, function (err) {
            console.log(err);
        });
        this.reviewService.findAllReviews()
            .subscribe(function (data) {
            _this.allReviews = data;
            console.log('Reviews here are ' + _this.allReviews);
            return data;
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.createUser = function () {
        var _this = this;
        this.user = {};
        this.user['firstName'] = this.firstName;
        this.user['lastName'] = this.lastName;
        this.user['email'] = this.email;
        this.user['role'] = this.role;
        console.log('user here is ' + JSON.stringify(this.user));
        this.userService.createUser(this.user)
            .subscribe(function (user2) {
            _this.users.push(_this.user);
            _this.router.navigate(['/admin']);
            _this.firstName = _this.lastName = _this.email = _this.role = '';
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.selectUser = function (userId) {
        var _this = this;
        console.log('selected id is ' + userId);
        this.selectedUserId = userId;
        this.userService.findUserById(userId)
            .subscribe(function (user2) {
            console.log('User here is ' + user2);
            _this.selectedUser = user2;
            console.log('Selected user in here ' + _this.selectedUser);
            _this.firstName = user2.firstName;
            _this.lastName = _this.selectedUser['lastName'];
            _this.email = _this.selectedUser['email'];
            _this.role = _this.selectedUser['role'];
            console.log('First name is' + user2._id);
        }, function (error) {
            console.log(error);
        });
        console.log('selected user is ' + JSON.stringify(this.selectedUser));
    };
    AdminComponent.prototype.updateUser = function () {
        var _this = this;
        this.updatedUser = {};
        this.updatedUser['firstName'] = this.firstName;
        this.updatedUser['lastName'] = this.lastName;
        this.updatedUser['role'] = this.role;
        this.updatedUser['email'] = this.email;
        this.userService.updateUser(this.selectedUserId, this.updatedUser)
            .subscribe(function (user2) {
            _this.router.navigate(['/admin']);
            _this.firstName = _this.lastName = _this.email = _this.role = '';
        }, function (error) {
            console.log(error);
        });
        this.selectedUserId = '';
    };
    AdminComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .subscribe(function (user2) {
            _this.users.splice(user2.index, 1);
            _this.router.navigate(['/admin']);
            _this.firstName = _this.lastName = _this.email = _this.role = '';
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.getAllReviews = function () {
        this.reviewService.findAllReviews()
            .subscribe(function (data) {
            return data;
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.deleteReview = function (reviewId) {
        this.reviewService.deleteReview(reviewId)
            .subscribe(function (data) {
            location.reload(true);
            return data;
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (updatedUser) {
            location.reload(true);
            _this.router.navigate(['/home']);
        }, function (err) {
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__["a" /* ReviewServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__["a" /* ReviewServiceClient */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid custom-center-container\">\n\n    <nav class=\"navbar navbar-fixed-top navbar-custom\">\n        <div class=\"container-fluid\">\n            <a class=\"navbar-brand pull-left\" [routerLink]=\"['/home']\">\n                <span\n                    class=\"glyphicon glyphicon-home pull-left glyph-color\">\n\n                </span>\n            </a>\n            <a class=\"navbar-brand pull-right\" *ngIf=\"!loggedIn\" [routerLink]=\"['/register']\">\n                <span\n                        class=\"glyphicon glyphicon-user pull-right glyph-color\"> Register</span>\n\n            </a>\n            <a class=\"navbar-brand pull-right\" *ngIf=\"!loggedIn\" [routerLink]=\"['/login']\">\n                <span\n                    class=\"glyphicon glyphicon-log-in pull-right glyph-color\"> Login</span>\n\n            </a>\n            <a class=\"navbar-brand pull-right\" *ngIf=\"loggedIn\" [routerLink]=\"['/profile']\">\n                <span\n                        class=\"glyphicon glyphicon-user pull-right glyph-color\"> Profile</span>\n\n            </a>\n            <a class=\"navbar-brand pull-right\" *ngIf=\"loggedIn\" (click)=\"logout()\" [routerLink]=\"['/home']\">\n                <span\n                        class=\"glyphicon glyphicon-log-out pull-right glyph-color\" (click)=\"logout()\"> Logout</span>\n\n            </a>\n        </div>\n    </nav>\n</div>\n\n<div class = \"top-margin\">\n    <div class=\"page-header \">\n        <h3> Welcome <span *ngIf=\"!loggedIn\"> Guest </span> <span *ngIf=\"loggedIn\">{{email}}</span></h3>\n    </div>\n</div>\n\n<div class=\"input-group input-group-lg\">\n    <input type=\"text\" [(ngModel)]=\"title\" class=\"form-control\" placeholder=\"Search movies by title\">\n    <span class=\"input-group-btn\">\n                <button class=\"btn btn-warning\" type=\"submit\" (click)=\"searchMovies()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search</button>\n            </span>\n</div>\n\n<div class=\"container\" *ngIf=\"searched\">\n    <h5>Found the following results for <i>{{title}}</i></h5>\n    <ul class=\"list-group\">\n        <li *ngFor=\"let movie of movies\" class=\"list-group-item \">\n\n            <div class=\"media-left media-middle\">\n                <a href=\"https://www.themoviedb.org/movie/{{movie.id}}\" target=\"_blank\">\n                    <img src=\"https://image.tmdb.org/t/p/w500/{{movie.poster_path}}\" width=\"50px\" alt=\"View on TMdB\"/>\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <span class=\"pull-right\"> {{movie.vote_average}}/10</span>\n                <a (click)=\"createMovie(movie.id, movie.title)\"><h2 class=\"media-heading\">{{movie.title}} ({{movie.release_date | date: \"yyyy\"}})</h2></a>\n                {{movie.overview}}\n\n\n\n            </div>\n\n        </li>\n    </ul>\n</div>\n    <div class=\"container\"></div>\n    <div role=\"tabpanel\" class=\"tab-pane active col-md-4\" id=\"popular\">\n        <div class=\"page-header\"><h3>Most Popular</h3></div>\n\n        <ul class=\"list-group\">\n            <li *ngFor=\"let movie of movies2\" class=\"list-group-item \">\n\n                <div class=\"media-left media-middle\">\n                    <a href=\"https://www.themoviedb.org/movie/{{movie.id}}\" target=\"_blank\">\n                        <img src=\"https://image.tmdb.org/t/p/w500/{{movie.poster_path}}\" width=\"50px\" alt=\"View on TMdB\"/>\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                    <span class=\"pull-right\"> {{movie.vote_average}}/10</span>\n                    <a (click)=\"createMovie(movie.id, movie.title)\"><h2 class=\"media-heading\">{{movie.title}} ({{movie.release_date | date: \"yyyy\"}})</h2></a>\n                    {{movie.overview}}\n\n\n\n                </div>\n\n            </li>\n        </ul>\n    </div>\n\n    <div role=\"tabpanel\" class=\"tab-pane active col-md-4\" id=\"latest\">\n        <div class=\"page-header\"><h3>Latest and upcoming</h3></div>\n\n        <ul class=\"list-group\">\n            <li *ngFor=\"let movie of movies3\" class=\"list-group-item \">\n\n                <div class=\"media-left media-middle\">\n                    <a href=\"https://www.themoviedb.org/movie/{{movie.id}}\" target=\"_blank\">\n                        <img src=\"https://image.tmdb.org/t/p/w500/{{movie.poster_path}}\" width=\"50px\" alt=\"View on TMdB\"/>\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                    <span class=\"pull-right\"> {{movie.vote_average}}/10</span>\n                    <a (click)=\"createMovie(movie.id, movie.title)\"><h2 class=\"media-heading\">{{movie.title}} ({{movie.release_date | date: \"yyyy\"}})</h2></a>\n                    {{movie.overview}}\n\n\n\n                </div>\n\n            </li>\n        </ul>\n    </div>\n\n    <div role=\"tabpanel\" class=\"tab-pane active col-md-4\" id=\"grossing\">\n        <div class=\"page-header\"><h3>Highest Grossing</h3></div>\n\n        <ul class=\"list-group\">\n            <li *ngFor=\"let movie of movies1\" class=\"list-group-item \">\n\n                <div class=\"media-left media-middle\">\n                    <a href=\"https://www.themoviedb.org/movie/{{movie.id}}\" target=\"_blank\">\n                        <img src=\"https://image.tmdb.org/t/p/w500/{{movie.poster_path}}\" width=\"50px\" alt=\"View on TMdB\"/>\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                    <span class=\"pull-right\"> {{movie.vote_average}}/10</span>\n                    <a (click)=\"createMovie(movie.id, movie.title)\"><h2 class=\"media-heading\">{{movie.title}} ({{movie.release_date | date: \"yyyy\"}})</h2></a>\n                    {{movie.overview}}\n\n\n\n                </div>\n\n            </li>\n        </ul>\n    </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_poc_service_client__ = __webpack_require__("../../../../../src/app/services/poc.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_movie_service_client__ = __webpack_require__("../../../../../src/app/services/movie.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(pocService, sharedService, userService, router, movieService) {
        this.pocService = pocService;
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.movieService = movieService;
        this.loggedIn = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.fetchCurrentUser()
            .subscribe(function (data) {
            if (data) {
                _this.loggedIn = true;
                _this.email = _this.sharedService.user['email'];
            }
        });
        console.log('User is ' + JSON.stringify(this.sharedService.user));
        this.findMostPopular();
        this.findHighestGrossing();
        this.findLatestRelease();
    };
    HomeComponent.prototype.searchMovies = function () {
        var _this = this;
        this.pocService.findMovies(this.title)
            .subscribe(function (data) {
            // console.log('Data here is ');
            // console.log(data);
            var val = data;
            // console.log('Val is ' + JSON.stringify(val));
            _this.movies = val;
            // console.log('Final movie list ' + JSON.stringify(this.movies));
            _this.searched = true;
        });
    };
    HomeComponent.prototype.findHighestGrossing = function () {
        var _this = this;
        this.pocService.findHighestGrossing()
            .subscribe(function (data) {
            // console.log('Data here is ');
            // console.log(data);
            var val1 = data;
            // console.log('Val is ' + JSON.stringify(val1));
            _this.movies1 = val1;
            // console.log('Highest grossing are ' + JSON.stringify(this.movies1));
        });
    };
    HomeComponent.prototype.findMostPopular = function () {
        var _this = this;
        this.pocService.findMostPopular()
            .subscribe(function (data) {
            // console.log('Data here is ');
            // console.log(data);
            var val2 = data;
            // console.log('Val is ' + JSON.stringify(val2));
            _this.movies2 = val2;
            // console.log('Most popular are ' + JSON.stringify(this.movies2));
        });
    };
    HomeComponent.prototype.findLatestRelease = function () {
        var _this = this;
        this.pocService.findLatestRelease()
            .subscribe(function (data) {
            // console.log('Data here is ');
            // console.log(data);
            var val3 = data;
            // console.log('Val is ' + JSON.stringify(val3));
            _this.movies3 = val3;
            // console.log('Latest are ' + JSON.stringify(this.movies3));
        });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (updatedUser) {
            location.reload(true);
            _this.router.navigate(['/home']);
        }, function (err) {
        });
    };
    HomeComponent.prototype.createMovie = function (id, title) {
        var _this = this;
        var movie = {};
        movie['movieId'] = id;
        movie['title'] = title;
        console.log("Insdie create movie in home component");
        this.movieService.createMovie(movie)
            .subscribe(function (mov) {
            _this.router.navigate(['movie', mov.movieId]);
        }, function (error) {
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_poc_service_client__["a" /* PocServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_poc_service_client__["a" /* PocServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_movie_service_client__["a" /* MovieServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_movie_service_client__["a" /* MovieServiceClient */]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"with-bg-image\">\n<div class=\"container top-margin aligned\">\n  <div class=\"col-md-12 text-center\">\n    <a class=\"btn-primary btn\" href=\"https://github.com/dishantkapadiya2694/webdev-project-Dishant-Vinayak\">\n      <span class=\"glyphicon glyphicon-file\"></span> &nbsp;Project Github</a>\n    <a class=\"btn-success btn\" href=\"https://webdev-project-dishant-vinayak.herokuapp.com\">\n      <span class=\"glyphicon glyphicon-cloud\"></span> &nbsp;Project Link</a>\n    <a class=\"btn-info btn\" [routerLink]=\"['/home']\">\n      <span class=\"glyphicon glyphicon-home\"></span> &nbsp;Project Home Page</a>\n  </div>\n</div>\n\n<div class=\"container top-margin aligned\">\n  <div class = \"col-md-6 aligned\">\n    <div class=\"container\">\n      <img src = \"../../../assets/Dishant.jpeg\" class=\"margined\" width = \"300\" height=\"300\">\n    </div>\n    <div class=\"top-buffer\">\n      <a class=\"btn btn-primary\" href=\"https://github.com/dishantkapadiya2694/webdev-Kapadiya-Dishant/releases\">\n        <span class=\"glyphicon glyphicon-file\"></span> &nbsp; Link to Github Assignments\n      </a>\n      <a class=\"btn btn-success\" href=\"https://webdev-kapadiya-dishant.herokuapp.com/login\">\n        <span class=\"glyphicon glyphicon-cloud\"></span> &nbsp;Link to Heroku Assignments\n      </a>\n    </div>\n  </div>\n\n  <div class = \"col-md-6 aligned\">\n    <div class=\"container\">\n      <img src = \"../../../assets/Vinayak.JPG\" class=\"margined\" width = \"300\" height=\"300\">\n    </div>\n    <div class=\"top-buffer\">\n      <a class=\"btn btn-primary text-center\" href=\"https://github.com/vinayakshamnani/webdev-shamnani-vinayak/releases\">\n        <span class=\"glyphicon glyphicon-file\"></span> &nbsp;Link to Github Assignments\n      </a>\n      <a class=\"btn btn-success text-center\" href=\"https://webdev-shamnani-vinayak.herokuapp.com/\">\n        <span class=\"glyphicon glyphicon-cloud\"></span> &nbsp;Link to Heroku Assignments</a>\n    </div>\n  </div>\n</div>\n</div>\n<hr>"

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/components/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/moderator/moderator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/moderator/moderator.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Welcome to Moderator Page\n</h1>\n\n\n<div class=\"container\">\n  <div class=\"col-md-12\">\n    <h1>Manage Reviews</h1>\n\n    <ul class=\"list-group\">\n      <li class=\"list-group-item list-header\">\n        <div class=\"row\">\n          <div class=\"col-xs-6\">\n            <label for=\"email\">Owner Id</label>\n          </div>\n          <div class=\"col-xs-4\">\n            <label for=\"firstname\">Review</label>\n          </div>\n          <div class=\"col-xs-2\">\n\n          </div>\n        </div>\n      <li *ngFor=\"let review of allReviews\"  class=\"list-group-item\">\n        <div class=\"row\">\n          <div class=\"col-xs-6\">\n            <a [routerLink]=\"['/userprofile',review.ownerId]\">{{review.ownerId}}</a>\n          </div>\n          <div class=\"col-xs-4\">\n            {{review.review}}\n          </div>\n          <div class=\"col-xs-2\">\n                    <span (click)=\"deleteReview(review._id)\"\n                          class=\"glyphicon glyphicon-remove red-color pull-right\"></span>\n          </div>\n        </div>\n\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/moderator/moderator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModeratorComponent = (function () {
    function ModeratorComponent(router, userService, reviewService) {
        this.router = router;
        this.userService = userService;
        this.reviewService = reviewService;
    }
    ModeratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers()
            .subscribe(function (users) {
            _this.users = users;
        }, function (err) {
            console.log(err);
        });
        this.reviewService.findAllReviews()
            .subscribe(function (data) {
            _this.allReviews = data;
            console.log('Reviews here are ' + _this.allReviews);
            return data;
        }, function (error) {
            console.log(error);
        });
    };
    ModeratorComponent.prototype.createUser = function () {
        var _this = this;
        this.user = {};
        this.user['firstName'] = this.firstName;
        this.user['lastName'] = this.lastName;
        this.user['email'] = this.email;
        this.user['role'] = this.role;
        console.log('user here is ' + JSON.stringify(this.user));
        this.userService.createUser(this.user)
            .subscribe(function (user2) {
            _this.users.push(_this.user);
            _this.router.navigate(['/admin']);
            _this.firstName = _this.lastName = _this.email = _this.role = '';
        }, function (error) {
            console.log(error);
        });
    };
    ModeratorComponent.prototype.selectUser = function (userId) {
        var _this = this;
        console.log('selected id is ' + userId);
        this.selectedUserId = userId;
        this.userService.findUserById(userId)
            .subscribe(function (user2) {
            console.log('User here is ' + user2);
            _this.selectedUser = user2;
            console.log('Selected user in here ' + _this.selectedUser);
            _this.firstName = user2.firstName;
            _this.lastName = _this.selectedUser['lastName'];
            _this.email = _this.selectedUser['email'];
            _this.role = _this.selectedUser['role'];
            console.log('First name is' + user2._id);
        }, function (error) {
            console.log(error);
        });
        console.log('selected user is ' + JSON.stringify(this.selectedUser));
    };
    ModeratorComponent.prototype.updateUser = function () {
        var _this = this;
        this.updatedUser = {};
        this.updatedUser['firstName'] = this.firstName;
        this.updatedUser['lastName'] = this.lastName;
        this.updatedUser['role'] = this.role;
        this.updatedUser['email'] = this.email;
        this.userService.updateUser(this.selectedUserId, this.updatedUser)
            .subscribe(function (user2) {
            _this.router.navigate(['/admin']);
            _this.firstName = _this.lastName = _this.email = _this.role = '';
        }, function (error) {
            console.log(error);
        });
        this.selectedUserId = '';
    };
    ModeratorComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .subscribe(function (user2) {
            _this.users.splice(user2.index, 1);
            _this.router.navigate(['/admin']);
            _this.firstName = _this.lastName = _this.email = _this.role = '';
        }, function (error) {
            console.log(error);
        });
    };
    ModeratorComponent.prototype.getAllReviews = function () {
        this.reviewService.findAllReviews()
            .subscribe(function (data) {
            return data;
        }, function (error) {
            console.log(error);
        });
    };
    ModeratorComponent.prototype.deleteReview = function (reviewId) {
        this.reviewService.deleteReview(reviewId)
            .subscribe(function (data) {
            location.reload(true);
            return data;
        }, function (error) {
            console.log(error);
        });
    };
    return ModeratorComponent;
}());
ModeratorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-moderator',
        template: __webpack_require__("../../../../../src/app/components/moderator/moderator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/moderator/moderator.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__["a" /* ReviewServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__["a" /* ReviewServiceClient */]) === "function" && _c || Object])
], ModeratorComponent);

var _a, _b, _c;
//# sourceMappingURL=moderator.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron row\">\n        <div class=\"col-sm-4\" *ngIf=\"movieByTMDBId['poster_path']\">\n            <img src=\"https://image.tmdb.org/t/p/w300/{{movieByTMDBId['poster_path']}}\">\n        </div>\n        <div class=\"col-sm-8\">\n            <h1>{{movieByTMDBId['title']}}</h1>\n            <p>{{movieByTMDBId['overview']}}</p>\n            <p>\n                <a *ngIf=\"movieByTMDBId['homepage']\"\n                   href=\"{{movieByTMDBId['homepage']}}\"\n                   class=\"btn btn-default btn-lg\"\n                   target=\"_blank\">\n                    <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i> Visit Website\n                </a>\n            </p>\n        </div>\n    </div>\n\n\n    <div class=\"row\">\n\n        <div class=\"col-xs-12 col-sm-6\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">Details</div>\n                <table class=\"table table-bordered table-responsive table-striped\">\n                        <tr>\n                            <td><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Runtime</td>\n                            <td>{{movieByTMDBId['runtime']}} minutes</td>\n                        </tr>\n                        <tr ng-if=\"model.movie.status == 'Released'\">\n                            <td><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Release Date</td>\n                            <td><span>{{movieByTMDBId['release_date']}}</span></td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i> Budget</td>\n                            <td>{{movieByTMDBId['budget'] | currency: \"USD\":'symbol-narrow':'4.2-2'}}</td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fa fa-money\" aria-hidden=\"true\"></i> Revenue</td>\n                            <td>{{movieByTMDBId['revenue'] | currency: \"USD\":'symbol-narrow':'4.2-2'}}</td>\n                        </tr>\n                </table>\n            </div>\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Genres</div>\n\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let genre of movieByTMDBId['genres']\"> {{genre['name']}}\n                    </li>\n                </ul>\n            </div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Production Companies</div>\n\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let co of movieByTMDBId['production_companies']\">\n                        {{co['name']}}\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-6\">\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Artists</div>\n                <div class=\"panel-body row\">\n                    <div class=\"col-sm-3\" *ngFor=\"let cast of movieByTMDBId['credits']['cast']; let i=index\">\n                        <div *ngIf=\"i<8\">\n                            <a href=\"#!/artist/{{cast['id']}}\">\n                                <img src=\"https://image.tmdb.org/t/p/w92{{cast['profile_path']}}\"\n                                     alt=\"{{cast['name']}}\">\n                            </a>\n                            <div class=\"caption\">\n                                <h5><a href=\"#!/artist/{{cast['id']}}\">{{cast['name']}}</a></h5>\n                                <p>as {{cast['character']}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"panel panel-default\">\n\n                <div class=\"panel-heading\">Reviews</div>\n                <form>\n                <div *ngIf=\"currentUser['role'] === 'Critic' && canReview\" class=\"panel-body form\">\n                    <textarea class=\"form-control\" rows=\"3\" ngModel [(ngModel)]='newreview' name=\"newReview\"></textarea>\n                    <a (click)=\"createReview()\" class=\"btn btn-success\">Post Review</a>\n                </div>\n                </form>\n                <div *ngFor=\"let review of reviewsForMovie\">\n                    <div class=\"list-group-item\">\n                        <h4 class=\"list-group-item-heading\">\n                            <a [routerLink]=\"['/userprofile/', review['ownerId']]\">{{review['username']}}</a>\n                        </h4>\n                        <p class=\"list-group-item-text\">\n                            {{review['review']}}\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_movie_service_client__ = __webpack_require__("../../../../../src/app/services/movie.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_poc_service_client__ = __webpack_require__("../../../../../src/app/services/poc.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MovieComponent = (function () {
    function MovieComponent(router, userService, reviewService, pocService, movieService, activatedRoute, sharedService) {
        this.router = router;
        this.userService = userService;
        this.reviewService = reviewService;
        this.pocService = pocService;
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.movieByTMDBId = { credits: [] };
        this.currentUser = {};
        this.movieFromDB = {};
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.movieTMDBId = params['movieId'];
            console.log(_this.movieTMDBId);
        });
        this.pocService.findMovieById(this.movieTMDBId)
            .subscribe(function (movie) {
            console.log('Reached here');
            // console.log('Movie here is ' + JSON.stringify(movie));
            // const tempMovie = movie;
            _this.movieByTMDBId = movie;
            _this.findMovieByObjectId();
            console.log('Temp Movie by id is ' + JSON.stringify(_this.movieByTMDBId));
        }, function (error) {
            console.log(error);
        });
        this.userService.fetchCurrentUser()
            .subscribe(function (data) {
            if (data) {
                _this.currentUser = _this.sharedService.user;
                console.log("Current user in movie component is" + JSON.stringify(_this.currentUser));
            }
        });
    };
    MovieComponent.prototype.findMovieByObjectId = function () {
        var _this = this;
        this.movieService.findMovieById(this.movieByTMDBId['id'])
            .subscribe(function (resp) {
            console.log(resp);
            var data = resp;
            _this.objectId = resp['_id'];
            _this.movieFromDB = data;
            console.log("movie from DB" + JSON.stringify(data));
            _this.findReviewsByMovieId();
        });
    };
    MovieComponent.prototype.createReview = function () {
        var _this = this;
        if (this.currentUser['role'] !== 'Critic') {
            return;
        }
        this.reviewService.findReviewsByFor(this.currentUser['_id'], this.movieFromDB['_id'])
            .subscribe(function (resp) {
            if (resp === null) {
                var review = {
                    ownerId: _this.currentUser['_id'],
                    username: _this.currentUser['email'],
                    movieId: _this.objectId,
                    review: _this.newreview
                };
                console.log('newreview is ' + _this.newreview);
                _this.reviewService.createReview(review)
                    .subscribe(function (response) {
                    var data = response;
                    location.reload(true);
                    return data;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                console.log('You have already reviewed this movie');
            }
        }, function (error) {
            var review = {
                userId: _this.currentUser['_id'],
                username: _this.currentUser['email'],
                movieId: _this.objectId,
                review: _this.newreview
            };
            _this.reviewService.createReview(review)
                .subscribe(function (resp) {
                var data = resp;
                return data;
            }, function (error1) {
                console.log(error1);
            });
        });
    };
    MovieComponent.prototype.findReviewsByMovieId = function () {
        var _this = this;
        console.log("movie from DB" + JSON.stringify(this.movieFromDB));
        this.reviewService.findReviewsByMovieId(this.movieFromDB['_id'])
            .subscribe(function (res) {
            var data = res;
            _this.reviewsForMovie = data;
            console.log('Reviews for movie ' + JSON.stringify(_this.reviewsForMovie));
            _this.canReviewFunction();
            return data;
        }, function (error) {
            console.log(error);
        });
    };
    MovieComponent.prototype.canReviewFunction = function () {
        var _this = this;
        if (this.currentUser['role'] !== 'Critic') {
            this.canReview = false;
        }
        this.reviewService.findReviewsByFor(this.currentUser['_id'], this.movieFromDB['_id'])
            .subscribe(function (resp) {
            if (resp === null) {
                _this.canReview = true;
            }
            else {
                _this.canReview = false;
            }
        }, function (error) {
            {
                _this.canReview = true;
            }
        });
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-movie',
        template: __webpack_require__("../../../../../src/app/components/movie/movie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/movie/movie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__["a" /* ReviewServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__["a" /* ReviewServiceClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_poc_service_client__["a" /* PocServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_poc_service_client__["a" /* PocServiceClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_movie_service_client__["a" /* MovieServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_movie_service_client__["a" /* MovieServiceClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */]) === "function" && _g || Object])
], MovieComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=movie.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/poc/poc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/poc/poc.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <h1>Proof Of Concept - TMDB API</h1>\n  <div class=\"container\">\n      <h2><label for=\"search-box\">Search</label></h2>\n      <input [(ngModel)]=\"title\" id=\"search-box\" name=\"title\"  class=\"form-control bottom-buffer\" required placeholder=\"Enter a movie title (e.g. Batman)\"/>\n      <button (click)=\"searchMovies()\" class=\"btn btn-primary btn-block\">\n        Search\n      </button>\n  </div>\n  <div class=\"container\" *ngIf=\"searched\">\n      <h5>Found the following results for <i>{{title}}</i></h5>\n      <ul class=\"list-group\">\n          <li *ngFor=\"let movie of movies\" class=\"list-group-item media\">\n              <div class=\"media-right\">\n                  <a href=\"https://www.themoviedb.org/movie/{{movie.id}}\" target=\"_blank\">\n                  <img src=\"https://image.tmdb.org/t/p/w500/{{movie.poster_path}}\" width=\"50px\" alt=\"View on TMdB\"/>\n                  </a>\n              </div>\n              <div class=\"media-body\">\n                  <span class=\"pull-right\">{{movie.vote_average}}/10</span>\n                  <h4>{{movie.title}} ({{movie.release_date | date: \"yyyy\"}})</h4>\n                  <p>{{movie.overview}}</p>\n              </div>\n          </li>\n      </ul>\n  </div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/poc/poc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POCComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_poc_service_client__ = __webpack_require__("../../../../../src/app/services/poc.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var POCComponent = (function () {
    function POCComponent(pocService) {
        this.pocService = pocService;
    }
    POCComponent.prototype.ngOnInit = function () {
    };
    POCComponent.prototype.searchMovies = function () {
        var _this = this;
        this.pocService.findMovies(this.title)
            .subscribe(function (data) {
            console.log('Data here is ');
            console.log(data);
            var val = data;
            console.log('Val is ' + JSON.stringify(val));
            _this.movies = val;
            console.log('Final movie list ' + JSON.stringify(_this.movies));
            _this.searched = true;
        });
    };
    return POCComponent;
}());
POCComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-poc',
        template: __webpack_require__("../../../../../src/app/components/poc/poc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/poc/poc.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_poc_service_client__["a" /* PocServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_poc_service_client__["a" /* PocServiceClient */]) === "function" && _a || Object])
], POCComponent);

var _a;
//# sourceMappingURL=poc.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form #f=\"ngForm\">\n    <input placeholder=\"email\"\n           name=\"email\"\n           type=\"text\"\n           class=\"form-control bottom-buffer\"\n           ngModel required autofocus\n           #email=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a username! </span>\n    <input placeholder=\"password\"\n           type=\"password\"\n           name=\"password\"\n           ngModel\n           class=\"form-control bottom-buffer\"\n           #password=\"ngModel\" required/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter a password! </span>\n    <button class=\"btn btn-primary btn-block bottom-buffer\" (click)=\"login()\" [disabled]=\"!f.valid\">Login</button>\n    <button class=\"btn btn-success btn-block bottom-buffer\" [routerLink]=\"['/register']\" >Register</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, userService, titleService) {
        this.router = router;
        this.userService = userService;
        this.titleService = titleService;
        this.errorMsg = 'Invalid credentials!';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Login');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.email = this.loginForm.value.email;
        this.password = this.loginForm.value.password;
        this.userService.login(this.email, this.password)
            .subscribe(function (user) {
            _this.errorFlag = false;
            if (user['role'] === 'admin') {
                _this.router.navigate(['/admin']);
            }
            else if (user['role'] === 'moderator') {
                _this.router.navigate(['/moderator']);
            }
            else {
                _this.router.navigate(['/home']);
            }
        }, function (error) {
            _this.errorFlag = true;
            console.log(error);
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom \">\n  <div class=\"container-fluid\">\n\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand glyph-color\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a (click) = \"update()\" [routerLink]=\"['/profile']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok glyph-color\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container top-margin\">\n  <div class=\"alert alert-success\" *ngIf=\"updated\">\n    <strong>Success!</strong> User updated!\n  </div>\n  <form #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control bottom-buffer\" id=\"email\" placeholder=\"shamnani.v@husky.neu.edu\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control bottom-buffer\" id=\"first-name\" placeholder=\"Vinayak\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"lastName\" name=\"lastName\"type=\"text\" class=\"form-control bottom-buffer\" id=\"last-name\" placeholder=\"Shamnani\">\n    </div>\n\n    <a class=\"btn btn-primary btn-block\"\n       [routerLink]=\"['/home']\">Home</a>\n    <a class=\"btn btn-danger btn-block bottom-margin\"\n       (click)=\"logout()\">Logout</a>\n  </form>\n</div>\n\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user glyph-color\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, titleService, sharedService, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.sharedService = sharedService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('User Profile');
        this.user = this.sharedService.user;
        console.log('The user is' + JSON.stringify(this.user));
        this.email = this.user['email'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.userId = this.user['_id'];
        // this.activatedRoute.params.subscribe(params => {
        //     this.user = this.userService.findUserById(this.userId).subscribe(
        //         (user: any) => {
        //             this.user = user;
        //             console.log('Found user ' + JSON.stringify(this.user));
        //         },
        //         (error: any) => {
        //             console.log(error);
        //
        //         }
        //     );
        // });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.user['email'] = this.profileForm.value.email;
        this.user['firstName'] = this.profileForm.value.firstName;
        this.user['lastName'] = this.profileForm.value.lastName;
        console.log('First and last name: ' + this.firstName + ' ' + this.lastName);
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (updatedUser) {
            if (updatedUser) {
                console.log('Inside update');
                _this.user = updatedUser;
                _this.updated = true;
            }
        }, function (err) {
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (updatedUser) {
            _this.router.navigate(['/login']);
        }, function (err) {
        });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"userExistsFlag\"\n       class=\"alert alert-danger\">\n    {{userExistsMessage}}\n  </div>\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMessage}}\n  </div>\n  <h1>User Registration</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n    <input placeholder=\"Email\"\n           name=\"email\"\n           type=\"text\"\n           class=\"form-control bottom-buffer\"\n           ngModel\n           required\n           #email=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Username cannot be blank!\n    </span>\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control bottom-buffer\"\n           ngModel\n           required\n           #password=\"ngModel\"\n    />\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter a valid password!\n   </span>\n    <input placeholder=\"Verify Password\"\n           type=\"password\"\n           name=\"verifypwd\"\n           ngModel\n           required\n           #verifypwd=\"ngModel\"\n           class=\"form-control bottom-buffer\"\n    />\n    <span class=\"help-block\" *ngIf=\"!verifypwd.valid && verifypwd.touched\">\n      Please re-enter your password!\n   </span>\n\n      <select name=\"role\"\n              id=\"role\"\n              class=\"form-control\"\n              ngModel\n              #role=\"ngModel\"\n              placeholder = \"Select Role\"\n              required\n              class=\"form-control bottom-buffer\">\n          <option value=\"\" disabled selected hidden>Select role</option>\n          <option value=\"Fan\">Fan</option>\n          <option value=\"Critic\">Critic</option>\n          <option value=\"admin\">admin</option>\n          <option value=\"moderator\">moderator</option>\n      </select>\n    <button class=\"btn btn-primary btn-block bottom-buffer\" type=\"submit\" [disabled]=\"!f.valid\">Register</button>\n    <button class=\"btn btn-danger btn-block bottom-buffer  \"\n            [routerLink]=\"['/login']\" >Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(router, userService, titleService) {
        this.router = router;
        this.userService = userService;
        this.titleService = titleService;
        this.errorMessage = 'Passwords do not match';
        this.userExistsMessage = 'Email already registered. Choose a different username.';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Register');
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var user = {};
        this.email = this.registrationForm.value.email;
        this.password = this.registrationForm.value.password;
        this.verifypwd = this.registrationForm.value.verifypwd;
        this.role = this.registrationForm.value.role;
        console.log('Email and password here are ' + this.email + ' and ' + this.password);
        var user2 = this.userService.findUserByEmail(this.email)
            .subscribe(function (user) {
            _this.userExistsFlag = true;
        }, function (error) {
            var user = {
                email: _this.email,
                password: _this.password,
                firstName: '',
                lastName: '',
                role: _this.role
            };
            if (_this.password === _this.verifypwd) {
                _this.userService.register(_this.email, _this.password, _this.role)
                    .subscribe(function (user2) {
                    _this.router.navigate(['/profile']);
                }, function (error) {
                    _this.errorFlag = true;
                    _this.errorMessage = 'Error registering';
                });
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registrationForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\"></div>\n\n<div class=\"top-margin container\">\n  <dl>{{user['firstName']}}</dl>\n  <dl>{{user['lastName']}}</dl>\n  <dl>{{user['email']}}</dl>\n  <a *ngIf=\"!alreadyFollows\" (click)=\"followUser()\">Follow User</a>\n  <a *ngIf=\"alreadyFollows\"(click)=\"unfollowUser()\">UnFollow User</a>\n</div>\n-->\n\n<div class=\"container-fluid custom-center-container\">\n\n  <nav class=\"navbar navbar-fixed-top navbar-custom\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand pull-left\" [routerLink]=\"['/home']\">\n                <span\n                        class=\"glyphicon glyphicon-home pull-left glyph-color\">\n\n                </span>\n      </a>\n    </div>\n  </nav>\n</div>\n\n<div class=\"container top-margin\">\n  <div class=\"row\">\n    <h1> User Details</h1>\n    <div class=\"col-md-12\">\n      <h2 class=\"namedH\">Email: {{user['email']}}</h2>\n      <h2 class=\"namedH\">First Name: {{user['firstName']}}</h2>\n      <h2 class=\"namedH\">Last Name: {{user['lastName']}}</h2>\n    </div>\n    <div class=\"row\">\n      <button *ngIf=\"!alreadyFollows\" class=\"btn btn-primary\" (click)=\"followUser()\"> Follow</button>\n      <button *ngIf=\"alreadyFollows\" class=\"btn btn-danger\" (click)=\"unfollowUser()\"> Unfollow</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserprofileComponent = (function () {
    function UserprofileComponent(activatedRoute, userService, sharedService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.sharedService = sharedService;
        this.user = {};
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (data) {
            _this.user = data;
        });
        this.userService.fetchCurrentUser()
            .subscribe(function (data) {
            if (data) {
                _this.loggedInUser = _this.sharedService.user;
                _this.getFollowees();
                console.log('Logged in user is ' + _this.loggedInUser);
            }
        });
    };
    UserprofileComponent.prototype.followUser = function () {
        this.userService.followUser(this.loggedInUser['_id'], this.userId)
            .subscribe(function (data) {
            location.reload(true);
            console.log('Successfully Followed User');
        });
    };
    UserprofileComponent.prototype.unfollowUser = function () {
        this.userService.unfollowUser(this.loggedInUser['_id'], this.userId)
            .subscribe(function (data) {
            location.reload(true);
            console.log('Successfully Followed User');
        });
    };
    UserprofileComponent.prototype.getFollowees = function () {
        var _this = this;
        this.userService.getFollowees(this.loggedInUser['_id'])
            .subscribe(function (data) {
            _this.currentUserFollows = data;
            console.log('Current user Follows ' + JSON.stringify(_this.currentUserFollows['follows']));
            if (_this.currentUserFollows['follows'].lastIndexOf(_this.userId) > -1) {
                _this.alreadyFollows = true;
            }
            else {
                _this.alreadyFollows = false;
            }
        });
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/components/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], UserprofileComponent);

var _a, _b, _c;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/admin.auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAuthGuard = (function () {
    function AdminAuthGuard(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn(['admin']);
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], AdminAuthGuard);

var _a, _b, _c;
//# sourceMappingURL=admin.auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn(['Fan', 'Critic']);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/moderator.auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeratorAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModeratorAuthGuard = (function () {
    function ModeratorAuthGuard(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    ModeratorAuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn(['moderator']);
    };
    return ModeratorAuthGuard;
}());
ModeratorAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], ModeratorAuthGuard);

var _a, _b, _c;
//# sourceMappingURL=moderator.auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/movie.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieServiceClient = (function () {
    function MovieServiceClient(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.API_KEY = 'd3d04ee78153a24eeb1f7a0e73f56a9c';
        this.TMDB_URL = 'https://api.themoviedb.org/3/search/movie';
    }
    MovieServiceClient.prototype.findMovieById = function (movieId) {
        console.log('baseUrl ' + this.baseUrl);
        return this._http.get(this.baseUrl + '/api/v1/movies/' + movieId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    MovieServiceClient.prototype.createMovie = function (movie) {
        return this._http.post(this.baseUrl + '/api/v1/movie', movie)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    MovieServiceClient.prototype.findMovieByObjectId = function (objectId) {
        return this._http.get(this.baseUrl + '/api/v1/movieByOId/:movieId' + objectId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return MovieServiceClient;
}());
MovieServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MovieServiceClient);

var _a;
//# sourceMappingURL=movie.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/poc.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PocServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PocServiceClient = (function () {
    function PocServiceClient(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.API_KEY = 'd3d04ee78153a24eeb1f7a0e73f56a9c';
        this.TMDB_URL = 'https://api.themoviedb.org/3';
    }
    // findMovies(title: string) {
    //
    //     const url = this.TMDB_URL + '?api_key=' + this.API_KEY + '&query=' + title;
    //     return this._http.get(url);
    //
    // }
    PocServiceClient.prototype.findMovies = function (title) {
        console.log('baseUrl ' + this.baseUrl);
        return this._http.post(this.baseUrl + '/api/v1/search/movies', { query: title })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PocServiceClient.prototype.findHighestGrossing = function () {
        return this._http.get(this.baseUrl + '/api/v1/search/highestgrossing')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PocServiceClient.prototype.findMostPopular = function () {
        return this._http.get(this.baseUrl + '/api/v1/search/mostpopular')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PocServiceClient.prototype.findLatestRelease = function () {
        return this._http.get(this.baseUrl + '/api/v1/search/latestrelease')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PocServiceClient.prototype.findMovieById = function (movieId) {
        return this._http.get(this.TMDB_URL + '/movie/' + movieId + '?api_key=' + this.API_KEY + '&append_to_response=credits,reviews')
            .map(function (res) {
            var data = res.json();
            // console.log('Data in POC is ' + JSON.stringify(data));
            return data;
        });
    };
    PocServiceClient.prototype.createMovie = function (movie) { };
    return PocServiceClient;
}());
PocServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PocServiceClient);

var _a;
//# sourceMappingURL=poc.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/review.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewServiceClient = (function () {
    function ReviewServiceClient(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    ReviewServiceClient.prototype.createReview = function (review) {
        return this._http.post(this.baseUrl + '/api/v1/review', review)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewServiceClient.prototype.findReviewById = function (reviewId) {
        return this._http.get(this.baseUrl + '/api/v1/review/' + reviewId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewServiceClient.prototype.findAllReviews = function () {
        return this._http.get(this.baseUrl + '/api/v1/reviews')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewServiceClient.prototype.findReviewsByUserId = function (userId) {
        return this._http.get(this.baseUrl + '/api/v1/reviewsBy/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewServiceClient.prototype.findReviewsByMovieId = function (movieId) {
        return this._http.get(this.baseUrl + '/api/v1/reviewsFor/' + movieId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewServiceClient.prototype.findReviewsByFor = function (userId, movieId) {
        return this._http.get(this.baseUrl + '/api/v1/reviewByFor/' + userId + '/' + movieId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewServiceClient.prototype.updateReview = function (review) {
        return this._http.put(this.baseUrl + '/api/v1/review', review)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewServiceClient.prototype.deleteReview = function (reviewId) {
        return this._http.delete(this.baseUrl + '/api/v1/review/' + reviewId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return ReviewServiceClient;
}());
ReviewServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ReviewServiceClient);

var _a;
//# sourceMappingURL=review.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
        this.user = null;
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.login = function (email, password) {
        this.options.withCredentials = true;
        var body = {
            username: email,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/v1/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/v1/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.register = function (email, password, role) {
        this.options.withCredentials = true;
        var user = {
            email: email,
            password: password,
            role: role
        };
        return this._http.post(this.baseUrl + '/api/v1/register', user, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.fetchCurrentUser = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/v1/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.loggedIn = function (userLevels) {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/v1/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0 && userLevels.lastIndexOf(user['role']) > -1) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/v1/user', user)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/v1/user/' + userId)
            .map(function (res) {
            console.log('Reached here');
            var data = res.json();
            console.log('Data here is ' + JSON.stringify(data));
            return data;
        });
    };
    UserService.prototype.findUserByEmail = function (email) {
        return this._http.get(this.baseUrl + '/api/v1/user?email=' + email)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByCredentials = function (email, password) {
        return this._http.get(this.baseUrl + '/api/v1/user?email=' + email + '&password=' + password)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/v1/user/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/v1/user/' + userId).map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.getAllUsers = function () {
        return this._http.get(this.baseUrl + '/api/v1/allUsers').map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.followUser = function (loggedInUserId, toBeFollowed) {
        return this._http.get(this.baseUrl + '/api/v1/user/' + loggedInUserId + '/follow/' + toBeFollowed)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.unfollowUser = function (loggedInUserId, toBeFollowed) {
        return this._http.get(this.baseUrl + '/api/v1/user/' + loggedInUserId + '/unfollow/' + toBeFollowed)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.getFollowers = function (loggedInId) {
        return this._http.get(this.baseUrl + '/api/v1/user/' + loggedInId + '/followers')
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.getFollowees = function (loggedInId) {
        return this._http.get(this.baseUrl + '/api/v1/user/' + loggedInId + '/follows')
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map