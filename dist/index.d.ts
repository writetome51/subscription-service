import { Subscribable, Unsubscribable } from 'rxjs';


export declare abstract class SubscriptionService implements Unsubscribable {

	private __subscribable;
	private __subscription;


	constructor(__subscribable: Subscribable<any>);


	unsubscribe(): void;


	protected _dataHandler(data: any): void;


	set(): void;

}
