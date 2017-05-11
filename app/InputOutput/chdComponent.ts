/**
 * Created by abhi on 4/17/2017.
 */
import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'chd',
    templateUrl:'./app/InputOutput/child.html'
})

export class ChdComponent{
    @Input() bookObj:any=null;

    @Output() invokeParent: EventEmitter<String> =new EventEmitter<String>();

    invokeClick(val,evnt):void{
        this.invokeParent.emit(val);
        evnt.stopPropagation();

    }

    accessedByParent(){
        alert("hello");
    }
}