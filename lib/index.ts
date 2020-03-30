import { Subscribable, Unsubscribable } from 'rxjs';


export class SubscriptionService implements Unsubscribable {

	private __data: any;
	private __subscription: Unsubscribable;


	constructor(private __subscribable: Subscribable<any>) {
		this.__set__subscription();
	}


	get data(): any {
		return this.__data;
	}


	unsubscribe(): void {
		this.__subscription.unsubscribe();
	}


	// Can be used as-is, but gives opportunity for further manipulation if overridden.
	// Must return result, which will be available in this.data

	protected _dataHandler(data) {
		return data;
	}


	private __set__subscription() {

		this.__subscription = this.__subscribable.subscribe((data) => {
			this.__data = this._dataHandler(data);
		});
	}


}
