import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppInfoState } from "../states/app-info.state";

export const appInfoSelector = createFeatureSelector<AppInfoState>('appInfo');

export const appInfoNameSelector = createSelector(appInfoSelector, (state: AppInfoState) => state.applicationName);

export const appInfoVersionSelector = createSelector(appInfoSelector, (state: AppInfoState) => state.applicationVersion);

export const appInfoDesriptionSelector = createSelector(appInfoSelector, (state: AppInfoState) => state.applicationDescription);

export const appInfoAuthorSelector = createSelector(appInfoSelector, (state: AppInfoState) => state.applicationAuthor);

export const appInfoBasicSelector = createSelector(appInfoSelector, (state: AppInfoState) => {
    return {
        applicationName: state.applicationName,
        applicationVersion: state.applicationVersion,
        applicationDescription: state.applicationDescription,
    }
})