import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'child-component',
    templateUrl: './child.component.html'
})
export class ChildComponent {
    constructor() { }
    
    @Input() message: string;
    @Output() messageEvent = new EventEmitter();
    passedToParnetMessage = '';

    setChildMessage(event){
        this.passedToParnetMessage = event.target.value;
    }

    sendMessageToParnet(){
        this.messageEvent.emit(this.passedToParnetMessage);
    }
}
