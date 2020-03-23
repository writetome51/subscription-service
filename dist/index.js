"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SubscriptionService = /** @class */ (function () {
    function SubscriptionService(__subscribable) {
        this.__subscribable = __subscribable;
        this.__set__subscription();
    }
    Object.defineProperty(SubscriptionService.prototype, "data", {
        get: function () {
            return this.__data;
        },
        enumerable: true,
        configurable: true
    });
    SubscriptionService.prototype.unsubscribe = function () {
        this.__subscription.unsubscribe();
    };
    SubscriptionService.prototype.__set__subscription = function () {
        var _this = this;
        this.__subscription = this.__subscribable.subscribe(function (data) {
            _this.__data = _this._dataHandler(data);
        });
    };
    return SubscriptionService;
}());
exports.SubscriptionService = SubscriptionService;
