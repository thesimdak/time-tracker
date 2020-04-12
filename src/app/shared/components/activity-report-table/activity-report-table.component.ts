import { Component } from '@angular/core';

@Component({
  selector: 'tt-activity-report-table',
  templateUrl: './activity-report-table.component.html',
  styleUrls: ['./activity-report-table.component.css']
})
export class ActivityReportTableComponent {
    
    
    displayedColumns: string[] = ['date', 'period'];
    dataSource = ELEMENT_DATA;
      

}

const ELEMENT_DATA: PeriodicElement[] = [
                                         {date: '12.4.2020', period: '07:51-16:00'},
                                         {date: '11.4.2020', period: '07:51-16:00'},
                                         {date: '10.4.2020', period: '07:51-16:00'},
                                       ];

export interface PeriodicElement {
    date: string;
    period: string;
  }