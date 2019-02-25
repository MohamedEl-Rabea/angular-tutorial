import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { DataSharingHomeComponent } from './data-sharing-home/data-sharing-home.component';
import { ParnetChildSharingComponent } from './Parent-child-sharing/parnet-child-sharing.component';
import { DataSharingRoutingModule } from './data-sharing-routing.module';
import { ParnerComponet } from './Parent-child-sharing/parent.componet';
import { ChildComponent } from './Parent-child-sharing/child.component';

@NgModule({
    declarations: [
        DataSharingHomeComponent,
        ParnetChildSharingComponent,
        ParnerComponet,
        ChildComponent
    ],
    imports: [DataSharingRoutingModule, FormsModule]
})
export class DataSharingModule {
}