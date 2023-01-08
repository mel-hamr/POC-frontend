

export interface AppInfoState {

    applicationName?: string;
    applicationVersion?: string;
    applicationDescription?: string;
    applicationAuthor?: AppAuthorState;
}

export interface AppAuthorState {
    lastName?: string;
    firstName?: string;
    email?: string;
}