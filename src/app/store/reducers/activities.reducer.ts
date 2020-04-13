import { ActivitiesState } from "../../shared/interfaces/activities-state.interface";
import { createReducer, on } from "@ngrx/store";
import { addActivity } from "../../store/actions/activity.actions";
import { createSelector } from "@ngrx/store";
import { State } from "../../store/reducers";

export const initialActivitiesState: ActivitiesState = {
        items: []
}

export const activitiesReducer = createReducer(initialActivitiesState,
        on(addActivity, (state: ActivitiesState, {name}) => {
            return {...state, items: [{id: '1', name: name}, ...state.items]};
            }
        ));

export function ActivitiesReducer(state, action) {
    return activitiesReducer(state, action);
}

export const activities = (state: State) => state.activities;

export const getActivities = createSelector(activities, state => state.items);