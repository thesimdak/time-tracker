import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Activity } from "../../interfaces/activity.interface";
import { getReadableDurationFromMilis } from "../../utils/date-utils";
import { ActivityService } from "src/app/shared/services/activity.service";
import { ActivityRun } from "src/app/shared/interfaces/activity-run.interface";


@Component({
  selector: 'tt-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent implements OnInit {
   
    @Input()
    public activity: Activity;
    
    public duration: string;
    
    constructor(private router: Router, private activityService: ActivityService) {
        
    }
    
    ngOnInit() {
        if (this.activity.currentRun) {
            let durationInMillis = new Date().getTime() - this.activity.currentRun.startTimeStamp;
            this.duration = getReadableDurationFromMilis(durationInMillis);
            
            setInterval(() => {
                let durationInMillis = new Date().getTime() - this.activity.currentRun.startTimeStamp;
                this.duration = getReadableDurationFromMilis(durationInMillis);
            }, 1000);
        }
    }
    
    public openReport(): void {
        this.router.navigateByUrl('/activity-report');
    }
    
    public getLastRunDuration(): string {
        let lastActivityRun: ActivityRun = this.activity.activityRuns[this.activity.activityRuns.length-1];
        let durationInMillis = lastActivityRun.endTimeStamp - lastActivityRun.startTimeStamp;
        return getReadableDurationFromMilis(durationInMillis);
    }
    
    public startActivity() {
        this.activityService.startActivity(this.activity.id);
    }
    
    public stopActivity() {
        this.activityService.stopActivity(this.activity.id);
        
    }

    
}
