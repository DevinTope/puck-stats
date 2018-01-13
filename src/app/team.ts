export class Team {
    id: number;
    name: string;
    venue: {};
    abb: string;
    teamName: string;
    locationName: string;
    firstYear: string;
    division: {
        id: number;
        name: string;
        conference: {}
    };
    conference: {};
    officialSiteUrl: string;
}