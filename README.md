# SubscriptionService

A TypeScript/JavaScript class that represents a [Subscription](https://rxjs-dev.firebaseapp.com/guide/subscription).  
When a [Subscribable](https://rxjs-dev.firebaseapp.com/api/index/interface/Subscribable) is passed
 to the constructor, the Subscription is created  
 and the observable data is passed to `_dataHandler()`.  
 `_dataHandler()` returns a result that is available in the `data` property. You call  
 `unsubscribe()` on the class instance when you need to.


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

## Properties
```ts
data: any // read-only
```

## Methods

```ts
unsubscribe(): void

protected  _dataHandler(data): any
    // Can be used as-is, but gives opportunity for further manipulation 
    // of observable data if overridden.
    // Must return result, which will be available in this.data
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
