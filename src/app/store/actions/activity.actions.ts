import { createAction, props } from "@ngrx/store";

export const addActivity = createAction(
        '[Activities] addActivity',
        props<{ name: string }>()
    );

export const startActivity = createAction(
        '[Activities] startActivity',
        props<{ activityId: string }>()
    );

export const stopActivity = createAction(
        '[Activities] stopActivity',
        props<{ activityId: string }>()
    );

export const deleteActivity = createAction(
        '[Activities] deleteActivity',
        props<{ activityId: string }>()
    );