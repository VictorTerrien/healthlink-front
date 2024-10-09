export interface IPedro {
    id?: number
    name: string
    age: number
}

export declare type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export declare type RequestContentType =
    | "application/json"
    | "multipart/form-data";

export interface RequestHeader {
    Accept?: "application/hal+json";
    Authorization?: string;
    "Content-Type": RequestContentType;
}

export enum PlacementCompetition {
    FIRST,
    SECOND,
    THIRD,
    MIDTABLE,
    LAST,
}