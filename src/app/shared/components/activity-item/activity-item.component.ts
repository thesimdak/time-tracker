import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Activity } from "src/app/shared/interfaces/activities-state.interface";

@Component({
  selector: 'tt-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent implements OnInit {
   
    @Input()
    public activity: Activity;
    
    constructor(private router: Router) {
        
        
    }
    
    ngOnInit(): void {
    //    this.activity = {id: '1', name: 'tttt'};
    }
    
    public openReport(): void {
        this.router.navigateByUrl('/activity-report');
    }

}
