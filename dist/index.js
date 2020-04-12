"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubscriptionService {
    constructor(__subscribable) {
        this.__subscribable = __subscribable;
    }
    set() {
        this.__subscription = this.__subscribable.subscribe(this._dataHandler);
    }
    unsubscribe() {
        this.__subscription.unsubscribe();
    }
    // This is not declared as abstract because it's possible it will have to be defined in a
    // subclass' constructor.  If that is the case, and this is declared abstract, Typescript
    // will give an error saying the subclass incorrectly extends this class.
    _dataHandler(data) {
        throw new Error(`The method '_dataHandler()' has not been implemented`);
    }
}
exports.SubscriptionService = SubscriptionService;
