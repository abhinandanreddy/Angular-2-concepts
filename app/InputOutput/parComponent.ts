/**
 * Created by abhi on 4/17/2017.
 */
import {Component, ViewChild, ViewChildren,} from '@angular/core';
import {ChdComponent} from './chdComponent'

@Component({
    selector:'par',
    templateUrl:'./app/InputOutput/par.html',
    styles:['styles.css']
})


export class ParComponent{


    @ViewChild(ChdComponent) chdComponent:ChdComponent;
    @ViewChildren(ChdComponent) chdComponent1:ChdComponent;
    public books:any=[
        {name:'Angular js',price:'30$',author:'google'},
        {name:'Angular 4',price:'40$',author:'google'},
        {name:'Java',price:'50$',author:'james gosling'},
        {name:'Spring',price:'60$',author:'james bond'},
        {name:'Javascript',price:'70$',author:'mozilla'},
        ];

    public mess:string='';

    public disp:any =false;

    public tog(book):void{
        if(!book.hasOwnProperty('show')){
            book.show=true;
        }
        else if(book.hasOwnProperty('show') && book.show  === false) {
            book.show=true;
        }
        else {
            book.show= false;

        }
    }

    public invokeFunPar(bookname:string):void{
        this.mess=bookname;
    }

    callMethodOnChild(){
        this.chdComponent.accessedByParent();
        console.log(this.chdComponent1);
        console.log(this.chdComponent);
    }
}