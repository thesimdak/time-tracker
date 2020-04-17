import { ActivitiesState } from "../../shared/interfaces/activities-state.interface";
import { createReducer, on } from "@ngrx/store";
import { addActivity, stopActivity, startActivity } from "../../store/actions/activity.actions";
import { createSelector } from "@ngrx/store";
import { State } from "../../store/reducers";
import * as uuid from 'uuid';
import { Activity } from "src/app/shared/interfaces/activity.interface";

export const initialActivitiesState: ActivitiesState = {
        items: []
}

export const activitiesReducer = createReducer(initialActivitiesState,
        on(addActivity, (state: ActivitiesState, {name}) => {
            const id: string = uuid.v4();
            const activity: Activity = {
                    id: id, 
                    name: name,
                    activityRuns: [],
                    currentRun: {startTimeStamp: new Date().getTime()},
            };
            return {...state, items: [activity, ...state.items]};
            }
        ),
        on(stopActivity, (state: ActivitiesState, {activityId}) => {
            let activity: Activity = state.items.filter(activity => activity.id == activityId)[0];
            let activityIndex: number = state.items.map(activity => activity.id).indexOf(activity.id);
            activity = {...activity, currentRun: {...activity.currentRun, endTimeStamp: new Date().getTime() }};
            activity = {...activity, activityRuns: [...activity.activityRuns, activity.currentRun,]};
            activity = {...activity, currentRun: undefined};
            let items = [...state.items.slice(0, activityIndex), activity];
            items = [...items, ...state.items.slice(activityIndex+1, state.items.length)]
            return {...state, items};
        }),
        on(startActivity, (state: ActivitiesState, {activityId}) => {
            let activity: Activity = state.items.filter(activity => activity.id == activityId)[0];
            let activityIndex: number = state.items.map(activity => activity.id).indexOf(activity.id);
            activity = {...activity, currentRun: {...activity.currentRun, startTimeStamp: new Date().getTime() }};
            let items = [...state.items.slice(0, activityIndex), activity];
            items = [...items, ...state.items.slice(activityIndex+1, state.items.length)]
            return {...state, items};
        }));

export function ActivitiesReducer(state, action) {
    return activitiesReducer(state, action);
}

export const activities = (state: State) => state.activities;

export const getActivities = createSelector(activities, state => state.items);