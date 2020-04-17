import { ActivityRun } from "src/app/shared/interfaces/activity-run.interface";

export interface Activity {
    id: string,
    name: string,
    activityRuns: ActivityRun[]
    currentRun: ActivityRun;
}