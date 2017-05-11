/**
 * Created by abhi on 4/16/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector:'customFilter',
    templateUrl:'./app/CustomPipes/filterSearch.html',
    styles:['styles.css']
})

export class filterComponent{
    public searchItem='';
    public objs=[
        {name:'Abhi',location:'sunnyvale'},
        {name:'Sai',location:'sunnyvale'},
        {name:'Venkat',location:'sunnyvale'},
        {name:'Chenna',location:'sunnyvale'},
        {name:'Malla',location:'sunnyvale'}
        ];
}