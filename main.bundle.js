webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_users_service__ = __webpack_require__("../../../../../src/app/rest/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rest_user_dto__ = __webpack_require__("../../../../../src/app/rest/user.dto.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.authorized = false;
    }
    AppComponent.prototype.runStream = function () {
        this.stream().subscribe(function (b) { return console.log(b); });
    };
    AppComponent.prototype.stream = function () {
        var subj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        setInterval(function () {
            subj.next(Date.now()); // кидаем по потоку каждую сек дату
        }, 1000);
        return subj;
    };
    AppComponent.prototype.signOut = function () {
        localStorage.removeItem('user');
        this.usersService.destroy();
        this.updateAuthorized();
        // this.router.navigate(['/', ]);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.user = this.getUserFromStorage();
        this.updateAuthorized();
    };
    AppComponent.prototype.setUser = function (user) {
        this.user = user;
        this.setUserFromStorage(user);
        this.updateAuthorized();
    };
    AppComponent.prototype.setChannel = function (channel) {
        this.channel = channel;
        this.channelService.add(channel);
    };
    AppComponent.prototype.updateAuthorized = function () {
        this.authorized = !!this.user;
        if (this.authorized) {
            this.usersService.init();
        }
        else {
            this.usersService.destroy();
        }
    };
    AppComponent.prototype.getUserFromStorage = function () {
        var data = window.localStorage.getItem('user');
        if (!data) {
            return;
        }
        return new __WEBPACK_IMPORTED_MODULE_4__rest_user_dto__["a" /* UserDto */](JSON.parse(data));
    };
    AppComponent.prototype.setUserFromStorage = function (user) {
        window.localStorage.setItem('user', JSON.stringify(user));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__rest_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__rest_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!authorized\" class=\"no-user\">\n\t<button \n\ttype=\"button\"\n\t(click)=\"runStream()\">\n\t\tRun\n\t</button>\n\t<div class=\"add-user\">\n\t\t<app-login (sent)=\"setUser($event)\">\n\t\t</app-login>\n\t</div>\n</div>\n\n<div *ngIf=\"authorized\" class=\"full-height\">\n\t<router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rest_users_service__ = __webpack_require__("../../../../../src/app/rest/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rest_channels_service__ = __webpack_require__("../../../../../src/app/rest/channels.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rest_messages_service__ = __webpack_require__("../../../../../src/app/rest/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_channel_channel_module__ = __webpack_require__("../../../../../src/app/containers/channel/channel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_new_channel_new_channel_module__ = __webpack_require__("../../../../../src/app/containers/new-channel/new-channel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_channel_channel_routes__ = __webpack_require__("../../../../../src/app/containers/channel/channel.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_new_channel_new_channel_routes__ = __webpack_require__("../../../../../src/app/containers/new-channel/new-channel.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_module__ = __webpack_require__("../../../../../src/app/components/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_users_users_module__ = __webpack_require__("../../../../../src/app/components/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_messages_messages_module__ = __webpack_require__("../../../../../src/app/components/messages/messages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_message_send_message_send_module__ = __webpack_require__("../../../../../src/app/components/message-send/message-send.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_channels_channels_module__ = __webpack_require__("../../../../../src/app/components/channels/channels.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    {
        path: '',
        redirectTo: 'channel',
        pathMatch: 'full'
    }
].concat(__WEBPACK_IMPORTED_MODULE_10__containers_channel_channel_routes__["a" /* channelRoutes */], __WEBPACK_IMPORTED_MODULE_11__containers_new_channel_new_channel_routes__["a" /* newChannelRoutes */]);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_9__containers_new_channel_new_channel_module__["a" /* NewChannelModule */],
            __WEBPACK_IMPORTED_MODULE_13__components_users_users_module__["a" /* UsersModule */],
            __WEBPACK_IMPORTED_MODULE_16__components_channels_channels_module__["a" /* ChannelsModule */],
            __WEBPACK_IMPORTED_MODULE_14__components_messages_messages_module__["a" /* MessagesModule */],
            __WEBPACK_IMPORTED_MODULE_15__components_message_send_message_send_module__["a" /* MessageSendModule */],
            __WEBPACK_IMPORTED_MODULE_8__containers_channel_channel_module__["a" /* ChannelModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__rest_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_6__rest_channels_service__["a" /* ChannelsService */],
            __WEBPACK_IMPORTED_MODULE_7__rest_messages_service__["a" /* MessagesService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/channels/channels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_channels_service__ = __webpack_require__("../../../../../src/app/rest/channels.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_channel_dto__ = __webpack_require__("../../../../../src/app/rest/channel.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChannelsComponent = (function () {
    function ChannelsComponent(channelsService, router, route) {
        var _this = this;
        this.channelsService = channelsService;
        this.router = router;
        this.channels = [];
        route.params.subscribe(function (params) {
            _this.id = +params.channelId;
        });
    }
    ChannelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.channelsService.get().subscribe(function (channels) { return _this.channels = channels; });
    };
    ChannelsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ChannelsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__rest_channel_dto__["a" /* ChannelDto */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rest_channel_dto__["a" /* ChannelDto */]) === "function" && _a || Object)
], ChannelsComponent.prototype, "currentChannel", void 0);
ChannelsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-channels',
        template: __webpack_require__("../../../../../src/app/components/channels/channels.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__rest_channels_service__["a" /* ChannelsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rest_channels_service__["a" /* ChannelsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], ChannelsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=channels.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/channels/channels.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"channels\">\n    <li *ngFor=\"let channel of channels\" class=\"channels-list-item\">\n            <a [routerLink]=\"['/channel/' + channel.id]\" class=\"channels-link\" >\n                # {{channel.name}}</a>\n       <span *ngIf=\"currentChannel.id === channel.id\"> (current)</span>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/channels/channels.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__channels_component__ = __webpack_require__("../../../../../src/app/components/channels/channels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChannelsModule = (function () {
    function ChannelsModule() {
    }
    return ChannelsModule;
}());
ChannelsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__channels_component__["a" /* ChannelsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__channels_component__["a" /* ChannelsComponent */]
        ]
    })
], ChannelsModule);

//# sourceMappingURL=channels.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_users_service__ = __webpack_require__("../../../../../src/app/rest/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_user_dto__ = __webpack_require__("../../../../../src/app/rest/user.dto.ts");
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
    function LoginComponent(usersService) {
        this.usersService = usersService;
        this.sent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.userName.length < 2) {
            return;
        }
        var user = new __WEBPACK_IMPORTED_MODULE_2__rest_user_dto__["a" /* UserDto */]();
        user.id = (new Date).getTime();
        user.name = this.userName;
        this.usersService.add(user).subscribe(function () {
            _this.sent.emit(user);
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "sent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], LoginComponent.prototype, "userName", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rest_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rest_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.html":
/***/ (function(module, exports) {

module.exports = "<input \n    class=\"add-user-field\" \n    type=\"text\" \n    name=\"userName\"\n    placeholder=\"Enter a name\"\n    [(ngModel)]=\"userName\">\n<br>\n\n<button type=\"button\" (click)=\"submit()\" class=\"add-user-btn\">\n    Sign in\n</button> "

/***/ }),

/***/ "../../../../../src/app/components/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */] // тепер можем форми використовувать
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/message-send/message-send.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageSendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_messages_service__ = __webpack_require__("../../../../../src/app/rest/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_message_dto__ = __webpack_require__("../../../../../src/app/rest/message.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_channels_service__ = __webpack_require__("../../../../../src/app/rest/channels.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageSendComponent = (function () {
    function MessageSendComponent(messagesService, channelsService) {
        this.messagesService = messagesService;
        this.channelsService = channelsService;
        this.sent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MessageSendComponent.prototype.send = function () {
        var _this = this;
        if (this.textMessage.length < 1) {
            return;
        }
        var message = new __WEBPACK_IMPORTED_MODULE_2__rest_message_dto__["a" /* MessageDto */]();
        message.date = new Date(Date.now());
        message.text = this.textMessage;
        message.userId = this.userId;
        message.channelId = this.channelId;
        this.textMessage = '';
        this.messagesService.add(message).subscribe(function () {
            _this.sent.emit();
        });
    };
    return MessageSendComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], MessageSendComponent.prototype, "sent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], MessageSendComponent.prototype, "userId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], MessageSendComponent.prototype, "channelId", void 0);
MessageSendComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-message-send',
        template: __webpack_require__("../../../../../src/app/components/message-send/message-send.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rest_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rest_messages_service__["a" /* MessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__rest_channels_service__["a" /* ChannelsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__rest_channels_service__["a" /* ChannelsService */]) === "function" && _b || Object])
], MessageSendComponent);

var _a, _b;
//# sourceMappingURL=message-send.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/message-send/message-send.html":
/***/ (function(module, exports) {

module.exports = "<form \n    class=\"message-send\"\n    (submit)=\"send()\">\n\n<input \n    class=\"message-send-field\"\n    type=\"text\"\n    name=\"textMessage\"\n    placeholder=\"Enter a message\"\n    [(ngModel)]=\"textMessage\">\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/message-send/message-send.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageSendModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_send_component__ = __webpack_require__("../../../../../src/app/components/message-send/message-send.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessageSendModule = (function () {
    function MessageSendModule() {
    }
    return MessageSendModule;
}());
MessageSendModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */] // тепер можем форми використовувать
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__message_send_component__["a" /* MessageSendComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__message_send_component__["a" /* MessageSendComponent */]
        ]
    })
], MessageSendModule);

//# sourceMappingURL=message-send.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_users_service__ = __webpack_require__("../../../../../src/app/rest/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_messages_service__ = __webpack_require__("../../../../../src/app/rest/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesComponent = (function () {
    function MessagesComponent(usersService, messagesService, router, route) {
        var _this = this;
        this.usersService = usersService;
        this.messagesService = messagesService;
        this.router = router;
        this.users = [];
        this.messages = [];
        route.params.subscribe(function (params) {
            _this.id = +params.channelId;
        });
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesService.init();
        this.messagesSub = this.messagesService.get()
            .subscribe(function (messages) { return _this.messages = messages.filter(function (message) {
            if (_this.id === undefined || isNaN(_this.id)) {
                return message;
            }
            else {
                return message.channelId === _this.id;
            }
        }); });
        this.usersSub = this.usersService.get().subscribe(function (users) { return _this.users = users; });
    };
    MessagesComponent.prototype.getUserName = function (userId) {
        var user = this.users.find(function (u) { return u.id === userId; });
        if (!user) {
            return;
        }
        return user.name;
    };
    MessagesComponent.prototype.ngOnDestroy = function () {
        this.messagesSub.unsubscribe();
        this.usersSub.unsubscribe();
    };
    return MessagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], MessagesComponent.prototype, "channelId", void 0);
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/components/messages/messages.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rest_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rest_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__rest_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rest_messages_service__["a" /* MessagesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], MessagesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"messages\">\n    <li *ngFor=\"let message of messages\">\n        <span class=\"message-user\">{{getUserName(message.userId)}}</span>\n        <span class=\"message-date\">{{message.date | date: 'h:mm'}}</span>\n        <div class=\"message-text\">{{message.text}}</div>    \n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_component__ = __webpack_require__("../../../../../src/app/components/messages/messages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessagesModule = (function () {
    function MessagesModule() {
    }
    return MessagesModule;
}());
MessagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */] // тепер можем форми використовувать
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__messages_component__["a" /* MessagesComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__messages_component__["a" /* MessagesComponent */]
        ]
    })
], MessagesModule);

//# sourceMappingURL=messages.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_users_service__ = __webpack_require__("../../../../../src/app/rest/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_user_dto__ = __webpack_require__("../../../../../src/app/rest/user.dto.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(usersService) {
        this.usersService = usersService;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.usersService.get().subscribe(function (users) { return _this.users = users; });
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return UsersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__rest_user_dto__["a" /* UserDto */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rest_user_dto__["a" /* UserDto */]) === "function" && _a || Object)
], UsersComponent.prototype, "currentUser", void 0);
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/components/users/users.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__rest_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rest_users_service__["a" /* UsersService */]) === "function" && _b || Object])
], UsersComponent);

var _a, _b;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/users.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"users\">\n    <li *ngFor=\"let user of users\">\n        &#9679; {{user.name}}\n        <span *ngIf=\"currentUser.id === user.id\"> (you)</span>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */] // тепер можем форми використовувать
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__users_component__["a" /* UsersComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__users_component__["a" /* UsersComponent */]
        ]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/app/containers/channel/channel-details/channel-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel_details_service__ = __webpack_require__("../../../../../src/app/containers/channel/channel-details/channel-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_user_dto__ = __webpack_require__("../../../../../src/app/rest/user.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rest_users_service__ = __webpack_require__("../../../../../src/app/rest/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rest_messages_service__ = __webpack_require__("../../../../../src/app/rest/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rest_channels_service__ = __webpack_require__("../../../../../src/app/rest/channels.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChannelDetailsComponent = (function () {
    function ChannelDetailsComponent(usersService, messagesService, channelsService, router, route) {
        var _this = this;
        this.usersService = usersService;
        this.messagesService = messagesService;
        this.channelsService = channelsService;
        this.router = router;
        this.channelMessages = [];
        this.channels = [];
        route.params.subscribe(function (params) {
            _this.id = +params.channelId;
            _this.name = _this.getChannelName(_this.id);
        });
    }
    ChannelDetailsComponent.prototype.ngOnInit = function () {
        this.user = this.getUserFromStorage();
    };
    ChannelDetailsComponent.prototype.getChannelName = function (channelId) {
        var _this = this;
        this.sub = this.channelsService.get().subscribe(function (channels) { return _this.channels = channels; });
        var channel = this.channels.find(function (item) { return item.id === channelId; });
        if (!channel) {
            return;
        }
        return channel.name;
    };
    ChannelDetailsComponent.prototype.getUserFromStorage = function () {
        var data = window.localStorage.getItem('user');
        if (!data) {
            return;
        }
        return new __WEBPACK_IMPORTED_MODULE_3__rest_user_dto__["a" /* UserDto */](JSON.parse(data));
    };
    return ChannelDetailsComponent;
}());
ChannelDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-channel-details',
        template: __webpack_require__("../../../../../src/app/containers/channel/channel-details/channel-details.html"),
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__channel_details_service__["a" /* ChannelDetailsSevice */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__rest_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__rest_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__rest_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__rest_messages_service__["a" /* MessagesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__rest_channels_service__["a" /* ChannelsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__rest_channels_service__["a" /* ChannelsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], ChannelDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=channel-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/channel/channel-details/channel-details.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-messages\">\n    <h1>{{name}}</h1>\n    <app-messages></app-messages>\n</div>\n\n<div class=\"content-message-send\">\n    <app-message-send [userId]=\"user.id\" [channelId]=\"id\"></app-message-send>\n</div> "

/***/ }),

/***/ "../../../../../src/app/containers/channel/channel-details/channel-details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__channel_details_component__ = __webpack_require__("../../../../../src/app/containers/channel/channel-details/channel-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_messages_messages_module__ = __webpack_require__("../../../../../src/app/components/messages/messages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message_send_message_send_module__ = __webpack_require__("../../../../../src/app/components/message-send/message-send.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChannelDetailsModule = (function () {
    function ChannelDetailsModule() {
    }
    return ChannelDetailsModule;
}());
ChannelDetailsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_messages_messages_module__["a" /* MessagesModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_message_send_message_send_module__["a" /* MessageSendModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__channel_details_component__["a" /* ChannelDetailsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__channel_details_component__["a" /* ChannelDetailsComponent */]
        ]
    })
], ChannelDetailsModule);

//# sourceMappingURL=channel-details.module.js.map

/***/ }),

/***/ "../../../../../src/app/containers/channel/channel-details/channel-details.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return channelDetailsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__channel_details_component__ = __webpack_require__("../../../../../src/app/containers/channel/channel-details/channel-details.component.ts");

var channelDetailsRoutes = [
    {
        path: ':channelId',
        component: __WEBPACK_IMPORTED_MODULE_0__channel_details_component__["a" /* ChannelDetailsComponent */]
    }
];
//# sourceMappingURL=channel-details.routes.js.map

/***/ }),

/***/ "../../../../../src/app/containers/channel/channel-details/channel-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelDetailsSevice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_messages_service__ = __webpack_require__("../../../../../src/app/rest/messages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChannelDetailsSevice = (function () {
    function ChannelDetailsSevice(messagesService) {
        this.messagesService = messagesService;
        this.cache = [];
    }
    ChannelDetailsSevice.prototype.get = function () {
        var _this = this;
        this.messagesService.get()
            .subscribe(function (allMessages) {
            allMessages.filter(function (message) {
                return message.channelId === undefined;
            });
            _this.cache = allMessages;
        });
    };
    return ChannelDetailsSevice;
}());
ChannelDetailsSevice = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rest_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rest_messages_service__["a" /* MessagesService */]) === "function" && _a || Object])
], ChannelDetailsSevice);

var _a;
//# sourceMappingURL=channel-details.service.js.map

/***/ }),

/***/ "../../../../../src/app/containers/channel/channel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_user_dto__ = __webpack_require__("../../../../../src/app/rest/user.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_users_service__ = __webpack_require__("../../../../../src/app/rest/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChannelComponent = (function () {
    function ChannelComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    ChannelComponent.prototype.ngOnInit = function () {
        this.user = this.getUserFromStorage();
        this.channelId = +this.router.url.split('/')[2];
    };
    ChannelComponent.prototype.signOut = function () {
        localStorage.removeItem('user');
        this.usersService.destroy();
        // this.router.navigate(['/', ]);
    };
    ChannelComponent.prototype.getUserFromStorage = function () {
        var data = window.localStorage.getItem('user');
        if (!data) {
            return;
        }
        return new __WEBPACK_IMPORTED_MODULE_1__rest_user_dto__["a" /* UserDto */](JSON.parse(data));
    };
    return ChannelComponent;
}());
ChannelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-channel',
        template: __webpack_require__("../../../../../src/app/containers/channel/channel.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__rest_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rest_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ChannelComponent);

var _a, _b;
//# sourceMappingURL=channel.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/channel/channel.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n    <div class=\"channel\">\n        <h1>channels <a [routerLink]=\"['/new-channel']\" class=\"channels-link\">+</a> </h1>\n    </div>\n\n    <app-channels [currentChannel]=\"channelId\"></app-channels>\n    <app-users [currentUser]=\"user\"></app-users>\n</div>\n\n<div class=\"content\">\n<div class=\"content-user-info\">\n    <div>{{user.name}}</div>\n    <button type=\"button\" (click)=\"signOut()\" class=\"sign_out-user-btn\">\n        Sign out\n    </button>\n</div>\n    <router-outlet></router-outlet>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/containers/channel/channel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__channel_component__ = __webpack_require__("../../../../../src/app/containers/channel/channel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__channel_details_channel_details_module__ = __webpack_require__("../../../../../src/app/containers/channel/channel-details/channel-details.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_channels_channels_module__ = __webpack_require__("../../../../../src/app/components/channels/channels.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_users_users_module__ = __webpack_require__("../../../../../src/app/components/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_messages_messages_module__ = __webpack_require__("../../../../../src/app/components/messages/messages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_message_send_message_send_module__ = __webpack_require__("../../../../../src/app/components/message-send/message-send.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ChannelModule = (function () {
    function ChannelModule() {
    }
    return ChannelModule;
}());
ChannelModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_channels_channels_module__["a" /* ChannelsModule */],
            __WEBPACK_IMPORTED_MODULE_4__channel_details_channel_details_module__["a" /* ChannelDetailsModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_users_users_module__["a" /* UsersModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_messages_messages_module__["a" /* MessagesModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_message_send_message_send_module__["a" /* MessageSendModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__channel_component__["a" /* ChannelComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__channel_component__["a" /* ChannelComponent */]
        ]
    })
], ChannelModule);

//# sourceMappingURL=channel.module.js.map

/***/ }),

/***/ "../../../../../src/app/containers/channel/channel.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return channelRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__channel_component__ = __webpack_require__("../../../../../src/app/containers/channel/channel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel_details_channel_details_routes__ = __webpack_require__("../../../../../src/app/containers/channel/channel-details/channel-details.routes.ts");


var channelRoutes = [
    {
        path: 'channel',
        component: __WEBPACK_IMPORTED_MODULE_0__channel_component__["a" /* ChannelComponent */],
        children: __WEBPACK_IMPORTED_MODULE_1__channel_details_channel_details_routes__["a" /* channelDetailsRoutes */].slice()
    }
];
//# sourceMappingURL=channel.routes.js.map

/***/ }),

/***/ "../../../../../src/app/containers/new-channel/new-channel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChannelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_channels_service__ = __webpack_require__("../../../../../src/app/rest/channels.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_channel_dto__ = __webpack_require__("../../../../../src/app/rest/channel.dto.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewChannelComponent = (function () {
    function NewChannelComponent(channelsService, router) {
        this.channelsService = channelsService;
        this.router = router;
        this.sent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NewChannelComponent.prototype.submit = function () {
        var _this = this;
        if (this.channelName.length < 2) {
            return;
        }
        var channel = new __WEBPACK_IMPORTED_MODULE_3__rest_channel_dto__["a" /* ChannelDto */]();
        channel.id = (new Date).getTime();
        channel.name = this.channelName;
        this.channelsService.add(channel).subscribe(function () {
            _this.sent.emit(channel);
        });
        this.router.navigate(['/channel/',]);
    };
    return NewChannelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], NewChannelComponent.prototype, "sent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], NewChannelComponent.prototype, "channelName", void 0);
NewChannelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-channel',
        template: __webpack_require__("../../../../../src/app/containers/new-channel/new-channel.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__rest_channels_service__["a" /* ChannelsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rest_channels_service__["a" /* ChannelsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewChannelComponent);

var _a, _b;
//# sourceMappingURL=new-channel.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/new-channel/new-channel.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"new-channel\">\n\n    <h1>New Channel</h1>\n    <input type=\"text\" class=\"new-channel-field\" name=\"channelName\" placeholder=\"Enter a channel name\" [(ngModel)]=\"channelName\">\n    <br>\n    <div class=\"new-channel-btn-wrap\">\n        <a [routerLink]=\"['/']\" class=\"new-channel-cancel\">\n            Cancel</a>\n        <button type=\"button\" (click)=\"submit()\" class=\"new-channel-btn\">\n            Add\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/containers/new-channel/new-channel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChannelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_channel_component__ = __webpack_require__("../../../../../src/app/containers/new-channel/new-channel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NewChannelModule = (function () {
    function NewChannelModule() {
    }
    return NewChannelModule;
}());
NewChannelModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__new_channel_component__["a" /* NewChannelComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__new_channel_component__["a" /* NewChannelComponent */]
        ]
    })
], NewChannelModule);

//# sourceMappingURL=new-channel.module.js.map

/***/ }),

/***/ "../../../../../src/app/containers/new-channel/new-channel.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return newChannelRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_channel_component__ = __webpack_require__("../../../../../src/app/containers/new-channel/new-channel.component.ts");

var newChannelRoutes = [
    {
        path: 'new-channel',
        component: __WEBPACK_IMPORTED_MODULE_0__new_channel_component__["a" /* NewChannelComponent */]
    }
];
//# sourceMappingURL=new-channel.routes.js.map

/***/ }),

/***/ "../../../../../src/app/rest/channel.dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelDto; });
var ChannelDto = (function () {
    function ChannelDto(channel) {
        if (!channel) {
            return;
        }
        this.id = channel.id;
        this.name = channel.name;
    }
    return ChannelDto;
}());

//# sourceMappingURL=channel.dto.js.map

/***/ }),

/***/ "../../../../../src/app/rest/channels.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest__ = __webpack_require__("../../../../../src/app/rest/rest.ts");


var ChannelsService = (function () {
    function ChannelsService() {
        this.channels = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.running = false;
    }
    ChannelsService.prototype.get = function () {
        this.running = true;
        this.performIntervalSync();
        return this.channels;
    };
    ChannelsService.prototype.add = function (channel) {
        return __WEBPACK_IMPORTED_MODULE_1__rest__["a" /* Rest */].addChannel(channel);
    };
    ChannelsService.prototype.performIntervalSync = function () {
        var _this = this;
        if (!this.running) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_1__rest__["a" /* Rest */].getChannels()
            .subscribe(function (channels) {
            _this.channels.next(channels);
            setTimeout(function () {
                _this.performIntervalSync();
            }, 10000);
        });
    };
    return ChannelsService;
}());

//# sourceMappingURL=channels.service.js.map

/***/ }),

/***/ "../../../../../src/app/rest/message.dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDto; });
var MessageDto = (function () {
    function MessageDto(message) {
        if (!message) {
            return;
        }
        this.id = message.id;
        this.text = message.text;
        this.userId = message.userId;
        this.channelId = message.channelId;
        this.date = message.date;
    }
    return MessageDto;
}());

//# sourceMappingURL=message.dto.js.map

/***/ }),

/***/ "../../../../../src/app/rest/messages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest__ = __webpack_require__("../../../../../src/app/rest/rest.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagesService = (function () {
    function MessagesService() {
        this.messages = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.running = false;
    }
    MessagesService.prototype.init = function () {
        var _this = this;
        if (!this.running) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_1__rest__["a" /* Rest */].getMessages()
            .subscribe(function (messages) {
            _this.messages.next(messages);
            setTimeout(function () {
                _this.init();
            }, 1000);
        });
    };
    MessagesService.prototype.destroy = function () {
        this.running = false;
    };
    MessagesService.prototype.get = function () {
        if (this.running) {
            return this.messages;
        }
        this.performIntervalSync();
        return this.messages;
    };
    MessagesService.prototype.add = function (message) {
        return __WEBPACK_IMPORTED_MODULE_1__rest__["a" /* Rest */].addMessage(message);
    };
    MessagesService.prototype.performIntervalSync = function () {
        var _this = this;
        this.running = true;
        __WEBPACK_IMPORTED_MODULE_1__rest__["a" /* Rest */].getMessages()
            .subscribe(function (messages) {
            _this.messages.next(messages);
            setTimeout(function () {
                _this.performIntervalSync();
            }, 1000);
        });
    };
    return MessagesService;
}());
MessagesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])()
], MessagesService);

//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ "../../../../../src/app/rest/rest.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_dto__ = __webpack_require__("../../../../../src/app/rest/message.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_dto__ = __webpack_require__("../../../../../src/app/rest/user.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__channel_dto__ = __webpack_require__("../../../../../src/app/rest/channel.dto.ts");




var MONGODB_API = 'https://api.mlab.com/api/1/databases/spdu-ng';
var API_KEY = '9UxYMuHYHmellW_9udyW2Y-vmVfFvP1E';
var USERS_URL = MONGODB_API + '/collections/users?apiKey=' + API_KEY;
var MESSAGES_URL = MONGODB_API + '/collections/messages?apiKey=' + API_KEY;
var CHANNELS_URL = MONGODB_API + '/collections/channels?apiKey=' + API_KEY;
var Rest = (function () {
    function Rest() {
    }
    Rest.addChannel = function (channel) {
        var subj = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', CHANNELS_URL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(channel));
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status !== 200) {
                subj.error(null);
                return;
            }
            var data = JSON.parse(xhr.responseText);
            subj.next(new __WEBPACK_IMPORTED_MODULE_3__channel_dto__["a" /* ChannelDto */](data));
            subj.complete();
        };
        return subj;
    };
    Rest.getChannels = function () {
        var subj = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', CHANNELS_URL, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status !== 200) {
                subj.error(null);
                return;
            }
            var data = JSON.parse(xhr.responseText);
            var channels = data.map(function (u) { return new __WEBPACK_IMPORTED_MODULE_3__channel_dto__["a" /* ChannelDto */](u); });
            subj.next(channels);
            subj.complete();
        };
        return subj;
    };
    Rest.addUser = function (user) {
        var subj = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', USERS_URL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(user));
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status !== 200) {
                subj.error(null);
                return;
            }
            var data = JSON.parse(xhr.responseText);
            subj.next(new __WEBPACK_IMPORTED_MODULE_2__user_dto__["a" /* UserDto */](data));
            subj.complete();
        };
        return subj;
    };
    Rest.getUsers = function () {
        var subj = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', USERS_URL, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status !== 200) {
                subj.error(null);
                return;
            }
            var data = JSON.parse(xhr.responseText);
            var users = data.map(function (u) { return new __WEBPACK_IMPORTED_MODULE_2__user_dto__["a" /* UserDto */](u); });
            subj.next(users);
            subj.complete();
        };
        return subj;
    };
    Rest.getMessages = function () {
        var subj = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', MESSAGES_URL, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status !== 200) {
                subj.error(null);
                return;
            }
            var data = JSON.parse(xhr.responseText);
            var messages = data.map(function (u) { return new __WEBPACK_IMPORTED_MODULE_1__message_dto__["a" /* MessageDto */](u); });
            subj.next(messages);
            subj.complete();
        };
        return subj;
    };
    Rest.addMessage = function (message) {
        var subj = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', MESSAGES_URL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(message));
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status !== 200) {
                subj.error(null);
                return;
            }
            var data = JSON.parse(xhr.responseText);
            subj.next(new __WEBPACK_IMPORTED_MODULE_1__message_dto__["a" /* MessageDto */](data));
            subj.complete();
        };
        return subj;
    };
    return Rest;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ "../../../../../src/app/rest/user.dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDto; });
var UserDto = (function () {
    function UserDto(user) {
        if (!user) {
            return;
        }
        this.id = user.id;
        this.name = user.name;
    }
    return UserDto;
}());

//# sourceMappingURL=user.dto.js.map

/***/ }),

/***/ "../../../../../src/app/rest/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest__ = __webpack_require__("../../../../../src/app/rest/rest.ts");


var UsersService = (function () {
    function UsersService() {
        this.users = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.running = true;
    }
    UsersService.prototype.init = function () {
        this.running = true;
        this.performIntervalSync();
    };
    UsersService.prototype.destroy = function () {
        this.running = false;
    };
    UsersService.prototype.get = function () {
        return this.users;
    };
    UsersService.prototype.add = function (user) {
        return __WEBPACK_IMPORTED_MODULE_1__rest__["a" /* Rest */].addUser(user);
    };
    UsersService.prototype.performIntervalSync = function () {
        var _this = this;
        if (!this.running) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_1__rest__["a" /* Rest */].getUsers()
            .subscribe(function (users) {
            _this.users.next(users);
            setTimeout(function () {
                _this.init();
            }, 10000);
        });
    };
    return UsersService;
}());

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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