/**
 * Created by abhi on 5/1/2017.
 */

import {Component} from '@angular/core'
import {injectableService} from './injectableService.component'

@Component({
    selector:'injected-comp',
    templateUrl:'./app/InjectableExamples/acceptInjectable.html'
    //providers:[injectableService]
})

export class acceptInjectable{

    names:string[]=[];
    constructor(private nameslist:injectableService){
        this.names= nameslist.get();
    }

    addValue(){
        this.nameslist.add('abhi2');
    }
}