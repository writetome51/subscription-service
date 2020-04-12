# SubscriptionService

A TypeScript/JavaScript class that represents a [Subscription](https://rxjs-dev.firebaseapp.com/guide/subscription).  
When a [Subscribable](https://rxjs-dev.firebaseapp.com/api/index/interface/Subscribable) is passed
 to the constructor, the Subscription is created  
 and the observable data is passed to `_dataHandler()`.  
 You call `unsubscribe()` on the class instance when you need to.


## Example
```ts
const usersSubscription = new SubscriptionService(usersSubscribable);

console.log(usersSubscription.data); // logs users to console.

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
