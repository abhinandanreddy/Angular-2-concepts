/**
 * Created by abhi on 4/15/2017.
 */

import {Component,OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {usersDataInterface} from './interfaceExample'

import 'rxjs/add/operator/map';

@Component({
  selector:'my-app',
    templateUrl:'./app/AllComponents/ProgressBar.html',
    styles:['styles.css']
})

export class ProgressBar {

    public myStyle:any={'width':5,'background-color':'green','height':'16px'};
    public blue='blue';
    public mdl2way="abhi 2 way";
    public mdl1way="abhi 1 way";
    public currWidth=this.myStyle.width;
    public showTable:boolean=false;
    public jsonResponse:usersDataInterface[]=[];

    public todayDate= new Date(1990,3,24);

    constructor(private http:Http){}

    public ng2ClickTest():void{
        alert("Ng2 Click Test Succesfull");
    }
    public increment():void{
               this.currWidth++;
               this.myStyle.width= this.currWidth + '%';
    }

    public decrement():void{
        if(this.currWidth > 0) {
            this.currWidth--;
            this.myStyle.width = this.currWidth + '%';
        }
    }
        public respCall():void{
            alert("Calling Restful Service For Json Response")
            this.http.get('https://jsonplaceholder.typicode.com/posts').map(function (res:Response) {
                return <usersDataInterface[]>res.json();
            }).subscribe((users) =>{
                this.jsonResponse=users;
                this.showTable=true;
            })
        }
}