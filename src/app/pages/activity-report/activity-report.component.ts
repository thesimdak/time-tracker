import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'tt-activity-report',
  templateUrl: './activity-report.component.html',
  styleUrls: ['./activity-report.component.css']
})
export class ActivityReportComponent {
    
    constructor(private router: Router) {
        
    }
    
    public goToActivities(): void {
        console.log('hovno');
        this.router.navigateByUrl("/")
    }

}
