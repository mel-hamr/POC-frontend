import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { publishAppInfo, publishAuthor, updateAppVersion } from "../actions/app-info.action";
import { AppInfoState } from "../states/app-info.state";


export const initAppInfoState : AppInfoState = {
    applicationVersion: undefined,
    applicationName: undefined,
    applicationDescription: undefined,
    applicationAuthor: undefined,
}

export const appInfoReducer = createReducer(
    initAppInfoState,
    on(publishAppInfo , (state, payload) => payload),
    on(publishAuthor , (state, payload) => ({...state, applicationAuthor: payload})),
    on(updateAppVersion, (state,payload) => ({...state, applicationVersion: payload.toString()})),

);
