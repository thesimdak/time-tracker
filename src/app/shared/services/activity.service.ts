import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../../store/reducers";
import { addActivity } from "../../store/actions/activity.actions";
import { Observable } from "rxjs";
import { Activity } from "../../shared/interfaces/activities-state.interface";
import { getActivities } from "../../store/reducers/activities.reducer";
import { select } from "@ngrx/store";

@Injectable({providedIn: 'root'})
export class ActivityService {
    
    constructor(private store: Store<State>) {

    }
    
    public addActivity(name: string): void {
        this.store.dispatch(addActivity({name: name}))
    }
    
    public getActivities(): Observable<Activity[]> {
       return this.store.pipe(select(getActivities));
    }
    
}