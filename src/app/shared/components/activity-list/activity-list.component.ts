import { Component, OnInit } from '@angular/core';
import { ActivityService } from "src/app/shared/services/activity.service";
import { Activity } from "src/app/shared/interfaces/activities-state.interface";
import { Observable, of } from "rxjs";

@Component({
  selector: 'tt-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
   
    public activities$: Observable<Activity[]>;
    
    constructor(private activityService: ActivityService) {
    }
    
    ngOnInit(): void {
        this.activities$ = this.activityService.getActivities();
    }
    
}
