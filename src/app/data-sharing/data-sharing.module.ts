import { NgModule } from "@angular/core";
import { DataSharingHomeComponent } from './data-sharing-home/data-sharing-home.component';
import { ParnetChildSharingComponent } from './Parent-child-sharing/parnet-child-sharing.component';
import { DataSharingRoutingModule } from './data-sharing-routing.module';

@NgModule({
    declarations: [
        DataSharingHomeComponent,
        ParnetChildSharingComponent
    ],
    imports: [DataSharingRoutingModule]
})
export class DataSharingModule {
}