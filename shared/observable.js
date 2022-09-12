export default class Observable {
    subscribers = [];

    constructor(){}
    subscribe(fn) {
        this.subscribers = this.subscribers.filter((subscribe) =>{
            return subscriber != fn;
        });
    }
    broadcast(value) {
        this.subscribers.forEach((sub) =>{
            sub(value);
        });
    }
}