/**
 * Created by abhi on 5/8/2017.
 */

import {Component,OnInit} from '@angular/core'
import {ActivatedRoute, Params,Router} from '@angular/router'

@Component({
    selector:'userDaetails',
    templateUrl:'./app/RouteParams/userDetails.html'
})

export class userDetails implements OnInit{

    public userId;
    constructor(private activeRoute:ActivatedRoute, private router:Router){}

   /*Will not work if we visit the same page again need to use observable example as below*/
   /* ngOnInit(){
         this.userId= this.route.snapshot.params['id'];
    }*/


    ngOnInit(){
        this.activeRoute.params.subscribe((params:Params) =>{
            this.userId=parseInt(params['id']);
        });
    }

    nextPage(){
        let nextId=this.userId+1;
        this.router.navigate(['/users',nextId ]);
    }

    previousPage(){
        let nextId=this.userId-1;
        this.router.navigate(['/users',nextId ]);
    }

    goToUsers(){
        let selectedUser=this.userId?this.userId:null;
        this.router.navigate(['/users',{id:selectedUser}])
    }

}