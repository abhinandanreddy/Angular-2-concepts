/**
 * Created by abhi on 5/1/2017.
 */

import {Component,OnInit} from '@angular/core'

@Component({
    selector:'hooks-main',
    template:`<div>
                     <input type="text" [(ngModel)]="name1"/>
                     <input type="text" [(ngModel)]="name2"/>
                  <hr/>
                    <hook-child [name1]="name1" [name2]="name2"></hook-child>
            
             </div>`
})


export class mainComp implements OnInit{

    name1:String="";
    name2:String="";

    ngOnInit():void{
        this.name1="abhi";
        this.name2="sai";
    }

}