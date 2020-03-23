import { Subscribable, Unsubscribable } from 'rxjs';


export abstract class SubscriptionService implements Unsubscribable {

	private __data: any;
	private __subscription: Unsubscribable; // the subscription to this.data


	constructor(private __subscribable: Subscribable<any>) {
		this.__set__subscription();
	}


	get data(): any {
		return this.__data;
	}


	unsubscribe(): void {
		this.__subscription.unsubscribe();
	}


	// Manipulates observable data and must return the result

	protected abstract _dataHandler(data): any


	private __set__subscription() {

		this.__subscription = this.__subscribable.subscribe((data) => {
			this.__data = this._dataHandler(data);
		});
	}


}
