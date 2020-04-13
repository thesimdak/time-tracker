import { Component } from '@angular/core';
import { ActivityService } from "src/app/shared/services/activity.service";
import { Observable } from "rxjs";
import { Activity } from "src/app/shared/interfaces/activities-state.interface";

@Component({
  selector: 'tt-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent {
    
    public activityName: string = '';
    
    constructor(private activityService: ActivityService) {}
    
    public addActivity() {
        this.activityService.addActivity(this.activityName);
    }
    
    
    

}
