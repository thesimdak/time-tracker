import { ActivitiesState } from "src/app/shared/interfaces/activities-state.interface";
import { ActionReducerMap } from "@ngrx/store";
import { ActivitiesReducer } from "./activities.reducer";

export interface State {
    activities: ActivitiesState
}

export const reducers: ActionReducerMap<State> = {
        activities: ActivitiesReducer
}