import { createAction, props } from "@ngrx/store";
import { AppAuthorState, AppInfoState } from "../states/app-info.state";


export const publishAppInfo = createAction('[AppInfo] publish appInfo' ,
 props< AppInfoState>());
export const publishAuthor = createAction('[AppInfo] publish author',
props< AppAuthorState>());
export const updateAppVersion = createAction('[AppInfo] update appVersion',
props< String>());
