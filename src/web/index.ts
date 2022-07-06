export enum Method {
    Get,
    Post,
    Put,
    Delete,
}

export enum StatusCodes {
// ReSharper disable once InconsistentNaming
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
}

export class Api {
    private _baseUrl: string;
    constructor(baseUrl?: string) {
        this._baseUrl = baseUrl;
    }
    get BaseUrl() { return this._baseUrl; }

    /*public getAll<T>(TCtor: new (...args: any[]) => T): T {
        // get type of T
        //const type = typeof (TCtor);

        return new TCtor();
    }*/
}