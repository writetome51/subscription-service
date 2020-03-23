"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubscriptionService {
    constructor(__subscribable) {
        this.__subscribable = __subscribable;
        this.__set__subscription();
    }
    get data() {
        return this.__data;
    }
    unsubscribe() {
        this.__subscription.unsubscribe();
    }
    __set__subscription() {
        this.__subscription = this.__subscribable.subscribe((data) => {
            this.__data = this._dataHandler(data);
        });
    }
}
exports.SubscriptionService = SubscriptionService;
