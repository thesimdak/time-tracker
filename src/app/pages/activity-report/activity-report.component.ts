import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ActivityService } from "src/app/shared/services/activity.service";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/reducers";
import { select } from "@ngrx/store";
import { getActivity } from "src/app/store/reducers/activities.reducer";
import { Activity } from "src/app/shared/interfaces/activity.interface";

@Component({
  selector: 'tt-activity-report',
  templateUrl: './activity-report.component.html',
  styleUrls: ['./activity-report.component.css']
})
export class ActivityReportComponent implements OnInit, OnDestroy {
       
    public sub: any;
    public selectedYear: number;
    public selectedMonth: number;
    public activity: Activity;
    
    constructor(private router: Router,
            private route: ActivatedRoute,
            private activityService: ActivityService,
            private store: Store<State>) {}
    
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
           let activityId = params['id'];
           this.store.pipe(
                   select(getActivity, { activityId: activityId })
                 ).subscribe(activity => {
                     this.activity = activity;
                 });          
        });
    }
    
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    public goToActivities(): void {
        this.router.navigateByUrl("/", { replaceUrl: true })
    }

    public deleteActivity() {
        let activityId = this.route.snapshot.paramMap.get("id");
        this.activityService.deleteActivity(activityId);
        this.goToActivities();
        
    }
    
    public setPeriod($event): void {
        this.selectedYear = $event['year'];
        this.selectedMonth = $event['month'];
        
    }
    
}
