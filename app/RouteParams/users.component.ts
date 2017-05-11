/**
 * Created by abhi on 5/8/2017.
 */

import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
    selector:'users',
    templateUrl:'./app/RouteParams/usersTemplate.html'
})

export class usersComponent implements OnInit{

    constructor(private router:Router, private activeRoute:ActivatedRoute){}
  public currentUser;
    public users=[
        {name:"abhi",id:1},
        {name:"Sai",id:2},
        {name:"Babbi",id:3},
        {name:"Rohith",id:4},
        {name:"Dheeraj",id:5}
        ]

    public navigateTo(user){
        this.router.navigate(['/users', user.id]);
    }

    ngOnInit(){
        this.activeRoute.params.subscribe((params:Params)=>{
            this.currentUser=parseInt(params['id']);
        })
    }
}