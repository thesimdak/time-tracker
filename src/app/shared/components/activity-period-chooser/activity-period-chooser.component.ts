import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/reducers";
import { getActivity } from "src/app/store/reducers/activities.reducer";
import { select } from "@ngrx/store";
import { Activity } from "src/app/shared/interfaces/activity.interface";
import { Month, months } from "src/app/shared/utils/date-utils";
import { ActivityRun } from "src/app/shared/interfaces/activity-run.interface";
import * as moment from 'moment';

@Component({
  selector: 'tt-activity-period-chooser',
  templateUrl: './activity-period-chooser.component.html',
  styleUrls: ['./activity-period-chooser.component.css']
})
export class ActivityPeriodChooserComponent implements OnDestroy {
   
    
    private sub: any;
    public yearsAndMonths: object = {};
    public years: string[];
    public months: string[]
    public selectedYear: string;
    public selectedMonth: string;
    @Output()
    public periodSelected: EventEmitter<object> = new EventEmitter();

    constructor(private route: ActivatedRoute, private store: Store<State>) {}
    
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
           let activityId = params['id'];
           this.store.pipe(
                   select(getActivity, { activityId: activityId })
                 ).subscribe(activity => {
                     this.computeYearsAndMonths(activity);
                 });          
        });
    }
      

    public computeYearsAndMonths(activity: Activity): void {
        if (!activity) {
            return;
        }
        let dateSet = new Set();
        for (let activityRun of activity.activityRuns) {
            let starts = moment(activityRun.startTimeStamp);
            let ends   = moment(activityRun.endTimeStamp);
            let dates = this.enumerateDaysBetweenDates(starts, ends);
            dates.forEach(item => dateSet.add(item))
        }
        for (let activityDate of dateSet) {
            let date: Date = <Date> activityDate;
            let monthsOfYear = this.yearsAndMonths[date.getFullYear() + ''];
            if (!monthsOfYear) {
                monthsOfYear = [];
                this.yearsAndMonths[date.getFullYear() + ''] = monthsOfYear;
                this.years = Object.keys(this.yearsAndMonths);
            }
            if (!monthsOfYear.includes(date.getMonth() + 1)) {
                monthsOfYear.push(date.getMonth() + 1);
                this.yearsAndMonths[date.getFullYear() + ''] = monthsOfYear;
                this.years = Object.keys(this.yearsAndMonths);
            }
        }
    }
    
    public enumerateDaysBetweenDates(startDate, endDate) {
        let dates = [];

        const currDate = startDate.startOf('day');
        const lastDate = endDate.startOf('day');
        
        
        dates.push(currDate.clone().toDate());
        while(currDate.add(1, 'days').diff(lastDate) < 0) {
            dates.push(currDate.clone().toDate());
        }

        return dates;
    };

    public onYearSelected( selectedYear) {
        this.months = this.yearsAndMonths[selectedYear];//.map(month => moment().month(month - 1).format("MMM"));
        this.selectedYear = selectedYear;
        if (this.selectedMonth) {
            this.periodSelected.emit({'year': this.selectedYear, 'month': this.selectedMonth})
        }
    }
    
    public getReadableMonth(month: number): string {
        return moment().month(month - 1).format("MMM");
    }
    
    public onMonthSelected( selectedMonth) {
        this.selectedMonth = selectedMonth;
        this.periodSelected.emit({'year': this.selectedYear, 'month': selectedMonth})
    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
      }
  
 

}
