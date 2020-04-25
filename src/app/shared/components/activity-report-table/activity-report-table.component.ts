import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/reducers";
import { getActivity } from "src/app/store/reducers/activities.reducer";
import { select } from "@ngrx/store";
import { Activity } from "src/app/shared/interfaces/activity.interface";
import { ActivityRun } from "src/app/shared/interfaces/activity-run.interface";
import { addDays, getTimePeriod, getReadableDate } from "src/app/shared/utils/date-utils";

@Component({
  selector: 'tt-activity-report-table',
  templateUrl: './activity-report-table.component.html',
  styleUrls: ['./activity-report-table.component.css']
})
export class ActivityReportTableComponent implements OnInit, OnDestroy, OnChanges {
       
    private sub: any;
    displayedColumns: string[] = ['date', 'period'];
    @Input()
    public selectedYear: number;
    @Input()
    public selectedMonth: number;
    public activity: Activity;
    public filteredRuns: ActivityRun[] = [];
    public dates: object;
    public tableData: PeriodicElement[] = [];
    
    
    constructor(private route: ActivatedRoute, private store: Store<State>) {}
    
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
    
    public ngOnChanges() {
        if (this.activity) {
            this.filterRuns(this.activity.activityRuns);
            
            let firstDayOfMonth: Date = new Date(this.selectedYear, this.selectedMonth-1, 1); 
            let lastDayOfMonth: Date = new Date(this.selectedYear, this.selectedMonth, 1); 
            for (let activityRun of this.filteredRuns) {
                let startDateTime = new Date(activityRun.startTimeStamp);
                let endDateTime = new Date(activityRun.endTimeStamp);
                
                let partialStartDateTime: Date;
                let partialEndDateTime: Date;
                if (startDateTime < firstDayOfMonth && endDateTime > firstDayOfMonth) {
                    partialStartDateTime = firstDayOfMonth;
                    for (let i = 1; i < lastDayOfMonth.getDate(); i++) {
                        if (endDateTime.getDate() > i) {
                            partialStartDateTime = addDays(firstDayOfMonth, i-1);
                            partialEndDateTime = addDays(firstDayOfMonth, i);
                            let formatted_date = getReadableDate(partialStartDateTime);
                            let period = getTimePeriod(partialStartDateTime, partialEndDateTime);
                            this.tableData.push({date: formatted_date, period: period});
                        } else if (endDateTime.getDate() === i) {
                            partialStartDateTime = addDays(firstDayOfMonth, i-1);
                            partialEndDateTime = endDateTime;
                            let formatted_date = getReadableDate(partialStartDateTime);
                            let period = getTimePeriod(partialStartDateTime, endDateTime);
                            this.tableData.push({date: formatted_date, period: period});
                            break;
                        }
                    }
                    
                
                } else if (startDateTime > firstDayOfMonth && startDateTime < lastDayOfMonth) {
                    partialStartDateTime = startDateTime;
                    let j = 1;
                    for (let i = startDateTime.getDate(); i <= endDateTime.getDate(); i++) {
                        if (endDateTime.getDate() > i) {
                            partialStartDateTime = addDays(startDateTime, j-1);
                            partialEndDateTime = new Date(this.selectedYear, this.selectedMonth - 1, startDateTime.getDate() + 1); 
                            let formatted_date = getReadableDate(partialStartDateTime);
                            let period = getTimePeriod(partialStartDateTime, partialEndDateTime);
                            this.tableData.push({date: formatted_date, period: period});
                        } else if ((endDateTime.getDate() !== startDateTime.getDate()) && (endDateTime.getDate() === i)) {
                            partialStartDateTime = new Date(this.selectedYear, this.selectedMonth - 1, startDateTime.getDate() + j);
                            partialEndDateTime = endDateTime;
                            let formatted_date = getReadableDate(partialStartDateTime);
                            let period = getTimePeriod(partialStartDateTime, endDateTime);
                            this.tableData.push({date: formatted_date, period: period});
                            break;
                        } else if ((endDateTime.getDate() === i)) {
                            partialStartDateTime = addDays(startDateTime, j-1);
                            partialEndDateTime = endDateTime;
                            let formatted_date = getReadableDate(partialStartDateTime);
                            let period = getTimePeriod(partialStartDateTime, endDateTime);
                            this.tableData.push({date: formatted_date, period: period});
                            break;
                        }
                    }
                }
            }
        }
    }
    
    public filterRuns(activityRuns: ActivityRun[]) {
        let firstDayOfMonth: Date = new Date(this.selectedYear, this.selectedMonth-1, 1); 
        let lastDayOfMonth: Date = new Date(this.selectedYear, this.selectedMonth, 1); 
        for (let activityRun of activityRuns) {
            let startDateTime = new Date(activityRun.startTimeStamp);
            let endDateTime = new Date(activityRun.endTimeStamp);
            
            if ((startDateTime > firstDayOfMonth && startDateTime < lastDayOfMonth)
                    || (endDateTime > firstDayOfMonth && endDateTime < lastDayOfMonth)
                    || (startDateTime < firstDayOfMonth && firstDayOfMonth < endDateTime)) {
                this.filteredRuns.push(activityRun);
            }
            
        }
        
    }
      

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}

export interface PeriodicElement {
    date: string;
    period: string;
  }