import { Subscribable, Unsubscribable } from 'rxjs';


export declare class SubscriptionService implements Unsubscribable {

	private __subscribable;
	private __data;
	private __subscription;


	constructor(__subscribable: Subscribable<any>);


	get data(): any;


	unsubscribe(): void;


	protected _dataHandler(data: any): any;


	private __set__subscription;

}
