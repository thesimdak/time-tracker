

import { createAction, props } from "@ngrx/store";

export const addActivity = createAction(
            '[Activities] addActivity',
            props<{ name: string }>()
        );