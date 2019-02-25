import { Component } from '@angular/core';

@Component({
    selector: 'parent-component',
    templateUrl: './parent.component.html',
})
export class ParnerComponet {
    parentMessage: string = 'Initial parent message';
    childPassedMessage: string;
    constructor() { }

    handleMessageEvent($event) {
        this.childPassedMessage = $event;
    }
}