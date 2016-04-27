System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', '../app.constants', 'angular2localization/angular2localization'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, app_constants_1, angular2localization_1;
    var ProductService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            },
            function (angular2localization_1_1) {
                angular2localization_1 = angular2localization_1_1;
            }],
        execute: function() {
            ProductService = (function () {
                function ProductService(_http, _configuration, _locale) {
                    var _this = this;
                    this._http = _http;
                    this._configuration = _configuration;
                    this._locale = _locale;
                    this.GetAvailableProducts = function () {
                        console.log(_this._locale.getCurrentLanguage());
                        console.log(_this._locale.getCurrentCountry());
                        _this.isoCode = _this._locale.getCurrentLanguage() + "-" + _this._locale.getCurrentCountry();
                        _this.setHeaders();
                        return _this._http.get(_this.actionUrl + "AvailableProducts?culture=" + _this.isoCode, {
                            headers: _this.headers
                        }).map(function (res) { return res.json(); });
                    };
                    this.actionUrl = _configuration.Server + "api/Shop/";
                }
                ProductService.prototype.setHeaders = function () {
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                    this.headers.append('Accept', 'application/json');
                };
                ProductService.prototype.GetProducts = function () {
                    var _this = this;
                    console.log('ShopComponent:getProducts starting...');
                    this.GetAvailableProducts()
                        .subscribe(function (data) { return _this.Products = data; }, function (error) { return console.log(error); }, function () { return console.log('ShopComponent:getProducts:Get all completed'); });
                };
                ProductService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration, angular2localization_1.LocaleService])
                ], ProductService);
                return ProductService;
            }());
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=ProductService.js.map