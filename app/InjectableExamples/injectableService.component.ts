/**
 * Created by abhi on 5/1/2017.
 */

import {Injectable} from '@angular/core'


export class injectableService{

  names:string[]=["Abhi1"];
     get():string[]{
         return this.names;
     }

     add(val:string):void{
         this.names.push(val);
     }
}
