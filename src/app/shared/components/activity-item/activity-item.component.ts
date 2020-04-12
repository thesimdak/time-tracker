import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'tt-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent {
    
    constructor(private router: Router) {
        
    }
    
    public openReport(): void {
        this.router.navigateByUrl('/activity-report');
    }

}
