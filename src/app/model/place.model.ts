export interface Place {

    title: string;
    city?: string;
    country?: string;
    keyword?: string;
    selected?: boolean;
    timestamp?: number;
    coordonates?: {
        longitude: number;
        latitude: number;
    };
    photos?: string[];

}
