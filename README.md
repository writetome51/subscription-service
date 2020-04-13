# SubscriptionService

An abstract TypeScript/JavaScript class that represents a [Subscription](https://rxjs-dev.firebaseapp.com/guide/subscription).  
A [Subscribable](https://rxjs-dev.firebaseapp.com/api/index/interface/Subscribable) must be passed
 to the constructor.
 But the subscription is not created until `.set()` is called on the instance.
 Every time the observable data is updated, it's passed to `._dataHandler()`.  
 You call `.unsubscribe()` on the instance when you need to.


## Example
```ts
class UsersSubscriptionService extends SubscriptionService {

    constructor(__usersSubscribable) {
        super(__usersSubscribable);

        this._dataHandler = (data: Users) => {
            // log users to console:
            console.log(data);
        };
    }

}

const usersSubscription = new UsersSubscriptionService(usersSubscribable);
usersSubscription.set();

// later on...
usersSubscription.unsubscribe();
```
    

## Constructor
```ts
constructor(__subscribable: Subscribable<any>)
```

## Methods

```ts
set(): void
    // Calls .subscribe() on `__subscribable` passed to the constructor.
    // The subscription is saved in the instance.

unsubscribe(): void

protected  _dataHandler(data): void
    // Must be implemented in a subclass.
    // This is the handler called whenever there is an update
    // to the data subscribed to.
```


## Installation

`npm i  @writetome51/subscription-service`

## Loading
```ts
// if using TypeScript:
import { SubscriptionService } from '@writetome51/subscription-service';
// if using ES5 JavaScript:
var SubscriptionService = 
    require('@writetome51/subscription-service').SubscriptionService;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
