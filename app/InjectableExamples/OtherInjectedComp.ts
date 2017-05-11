/**
 * Created by abhi on 5/9/2017.
 */

import {Component,OnInit} from '@angular/core'
import {injectableService} from './injectableService.component'

@Component({
    selector:'injectedComp2',
    template:`<div><h3 *ngFor="let users of data">{{users}}</h3></div>`
   // providers:[injectableService]
})

export class OtherInjectedComp implements OnInit{
    constructor(private injectedService:injectableService){}
    public data=[];
    ngOnInit(){
               this.data=this.injectedService.get();
               console.log(this.injectedService);
          }
}
