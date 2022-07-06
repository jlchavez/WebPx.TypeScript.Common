export interface IItemKey<TKey> {
    id: TKey;
}

export interface IItem extends IItemKey<string> {

}

export class ItemKey<TKey> implements IItemKey<TKey> {
    private _id: TKey;

    get id(): TKey { return this._id; }
    set id(value: TKey) { this._id = value; }
}

export class Item extends ItemKey<string> {

}

export interface INamedKey<TKey> extends IItemKey<TKey> {
    name: string;
}

export interface INamed extends IItem {
    name: string;
}

export class NamedKey<TKey> extends ItemKey<TKey> implements INamedKey<TKey> {
    //fields
    private _name: string;

    //properties
    get name(): string { return this._name; }
    set name(value: string) { this._name = value; }

}

export class Named extends NamedKey<string> implements INamed {

}

export interface IList<TElement> {
    get count(): number;
    add(value: TElement): void;
    get(index: number): TElement;
}

export class List<TElement> implements IList<TElement> {
    private items: Array<TElement>;

    constructor() {
        this.items = [];
    }

    get count(): number {
        return this.items.length;
    }
    insert(index:number, value: TElement): void {
        this.items = this.items.splice(index, 0, value);
    }
    add(value: TElement): void {
        this.items.push(value);
    }

    get(index: number): TElement {
        return this.items[index];
    }

    index(value): number {
        return this.items.indexOf(value);
    }

    remove(value) {
        this.items = this.items.splice(this.index(value),1);
    }
}

export class EventArgs<TElement> {
    private readonly _args: TElement;

    constructor(args: TElement) {
        this._args = args;
    }

    get args(): TElement { return this._args; }
}

export interface IEvent<T> {
    on(handler: { (sender: object, data?: T): void }): void;
    off(handler: { (sender: object, data?: T): void }): void;
    expose(): IEvent<T>;
}


export class Event<T> implements IEvent<T> {
    private _handlers: { (sender: object, data?: T): void; }[] = [];

    on(handler: { (sender: object, data?: T): void }): void {
        this._handlers.push(handler);
    }

    off(handler: { (sender: object, data?: T): void }): void {
        this._handlers = this._handlers.filter(h => h !== handler);
    }

    trigger(sender: object, data?: T) {
        this._handlers.slice(0).forEach(h => h(sender, data));
    }

    expose(): IEvent<T> {
        return this;
    }
}