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

export interface IArticle {
    id?: number;
    title: string;
    subtitle: string;
    resume: string;
    picture: IPicture;
    team?: ITeam;
    organisation?: IOrganisation;
    discipline?: IDiscipline;
    competition?: ICompetition;
    people?: IPeople;
    importance: importanceArticle;
    created_date: Date;
    updated_date: Date;
}

export interface ITeam {
    id?: number;
    name: string;
    description: string;
    discipline: discipline;
    region: number;
    organisation: organisation;
    picture_url?: string;
}

export interface IOrganisation {
    id?: number;
    name: string;
    description: string;
    picture: picture;
    country: country;
}

export interface IDiscipline {
    id?: number;
    name: string;
    description: string;
    picture: picture;
    type: disciplineType;
}

export interface IPeople {
    id?: number;
    firstname: string;
    lastname: string;
    birthday: Date;
    picture: picture;
    description: string;
    playerRole: playerRole;
    country: country;
    discipline: discipline;
}

export interface ICompetition {
    id?: number;
    name: string;
    description: string;
    picture: picture;
    dateStart: Date;
    dateEnd: Date;
    discipline: discipline;
    region: region;
    teamWinner: team;
}

export interface ICountry {
    id?: number;
    country: string;
    nationnality: string;
    flag: string;
}

export interface IRegion {
    id?: number;
    region: string;
    picture: picture;
}

export interface IPlayerRole {
    id?: number;
    name: string;
    discipline: discipline;
    picture: picture;
}

export interface ITeamPeople {
    team: team;
    people: people;
    dateStart: Date;
    dateEnd?: Date;
}

export interface ITeamCompetition {
    team: team;
    competition: competition;
    placement?: placementCompetition;
}

export interface IUser {
    id?: number;
    admin: boolean;
    firstname: string;
    lastname: string;
    picture: picture;
}

export interface IPicture {
    id?: number;
    url: string;
}

export enum ImportanceArticle {
    SMALL_ARTICLE,
    BIG_ARTICLE,
}

export enum DisciplineType {
    SPORT,
    ESPORT,
    OTHER,
}

export enum PlacementCompetition {
    FIRST,
    SECOND,
    THIRD,
    MIDTABLE,
    LAST,
}