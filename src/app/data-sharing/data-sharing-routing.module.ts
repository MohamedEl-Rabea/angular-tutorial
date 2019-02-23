import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DataSharingHomeComponent } from './data-sharing-home/data-sharing-home.component';
import { ParnetChildSharingComponent } from './Parent-child-sharing/parnet-child-sharing.component';

const dataSharingRoutes: Routes = [
    { path: "data-sharing", component: DataSharingHomeComponent },
    { path: "parent-child-sharing", component: ParnetChildSharingComponent }
]

@NgModule({
    imports: [RouterModule.forChild(dataSharingRoutes)],
    exports: [RouterModule]
})
export class DataSharingRoutingModule {
}