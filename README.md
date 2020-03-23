# SubscriptionService

An abstract TypeScript/JavaScript class that represents a Subscription to any kind of data.  
When a Subscribable is passed to the constructor, the Subscription is created, and the  
`data` property is assigned the observable data.  
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

## Properties
```ts
data: any // read-only
```

## Methods

```ts
unsubscribe(): void

protected abstract _dataHandler(data): any
    // Implement in a subclass.
    // Manipulates observable data and must return the result.
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
