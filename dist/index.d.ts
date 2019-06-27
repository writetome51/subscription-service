import { Subscription } from 'rxjs';


export declare class SubscriptionService {

	readonly data: any;

	private __observable;
	private __data;
	private __subscription;


	constructor(
		__observable: {
			subscribe: (dataHandler: (data: any) => void) => Subscription;
		}
	);


	unsubscribe(): void;


	private __set__subscription;
}
