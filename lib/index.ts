import { Subscribable, Unsubscribable } from 'rxjs';


export abstract class SubscriptionService implements Unsubscribable {

	private __subscription: Unsubscribable;


	constructor(private __subscribable: Subscribable<any>) {
	}


	set(): void {
		this.__subscription = this.__subscribable.subscribe(this._dataHandler);
	}


	unsubscribe(): void {
		this.__subscription.unsubscribe();
	}


	// This is not declared as abstract because it's possible it will have to be defined in a
	// subclass' constructor.  If that is the case, and this is declared abstract, Typescript
	// will give an error saying the subclass incorrectly extends this class.

	protected _dataHandler(data): void {
		throw new Error(`The method '_dataHandler()' has not been implemented`);
	}


}
