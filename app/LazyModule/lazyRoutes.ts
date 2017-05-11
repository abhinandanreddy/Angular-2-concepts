/**
 * Created by abhi on 5/8/2017.
 */
import {Routes,RouterModule} from '@angular/router'
import {ModuleWithProviders} from '@angular/core'
import {lazyComponent} from './lazyComponent'

const routes:Routes=[
    {path:'',component:lazyComponent},
    {path:'/firstPage',component:lazyComponent},
    {path:'/secondPage',component:lazyComponent},
    {path:'/thirdPage',component:lazyComponent}
];


export const lazyRoutes:ModuleWithProviders=RouterModule.forChild(routes);