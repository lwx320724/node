const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'


class myPromise{
    constructor(resolver){




        this.state = PENDING;
        this.data = undefined;
        this.callbackQueue = [];


        
    }
}