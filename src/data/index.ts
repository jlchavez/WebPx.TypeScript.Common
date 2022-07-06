import { IList } from "../common/index";

export interface IFilter {

}
export class Filter implements IFilter {

}
export interface INamedFilter {
    name?: string;
}
export class NamedFilter extends Filter {
    private _name: string;

    get name(): string { return this._name; }
    set name(value: string) { this._name = value; }
}

export class Paged<TElement> {
    private _totalRows: number;
    private _items: IList<TElement>;

    get totalRows(): number { return this._totalRows; }
    set totalRows(value: number) { this._totalRows = value; }

    get items(): IList<TElement> { return this._items; }
    set items(value: IList<TElement>) { this._items = value; }
}

export class PagingInfo {
    public startIndex?: number;
    public count?: number;
}

export class Sorting {
    private _items = new SortItemCollection();

    public get items(): SortItemCollection {
        return this._items;
    }
}

export class SortItem {
    public ordinal?: number;
    public name?: string;
    public direction: SortDirection;
}

export enum SortDirection {
    Ascending,
    Descending,
}

export class Collection<TItem> {
    private items: Array<TItem>;

    constructor() {
        this.items = [];
    }

    count(): number {
        return this.items.length;
    }

    add(value: TItem): void {
        this.items.push(value);
    }

    get(index: number): TItem {
        return this.items[index];
    }
}

export class SortItemCollection extends Collection<SortItem> {

}

export class QuerySettings<TFilter> {
    public filter?: TFilter;
    public paging?: PagingInfo;
    public sorting?: Sorting;
}
