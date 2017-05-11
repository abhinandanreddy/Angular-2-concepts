/**
 * Created by abhi on 5/1/2017.
 */

import {Component,OnChanges,SimpleChanges,Input} from '@angular/core'


@Component({
    selector:'hook-child',
    template:`<div>
                 <h3> Name1: {{name1}}</h3>
                 <h3>Name2: {{name2}}</h3>
              </div>`
})


export class hooksChild implements OnChanges{

    @Input() name1:string;
    @Input() name2:string;

    ngOnChanges(changes:SimpleChanges){
        //console.log(changes);
    }


}