export interface UnsplashImage {
    id : string;
    description : string | null;
    alt_description : string | null;
    urls : {
        raw : string;
        full : string;
        small : string;
        thumb: string;
    };
    user : {
        id : string;
        username : string;
        name : string;
        portfolio_url : string;
        profile_image : {
            small : string;
            medium : string;
            large : string;
        };
    };
    likes : string;
}