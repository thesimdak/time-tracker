import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from "./pages/activities/activities.component";
import { ActivityReportComponent } from "./pages/activity-report/activity-report.component";

const routes: Routes = [
                        { path: '', redirectTo: '/activities', pathMatch: 'full' },
                        { path: 'activities', component: ActivitiesComponent },                  
                        { path: 'activity-report', component: ActivityReportComponent },                  
                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
    
}
