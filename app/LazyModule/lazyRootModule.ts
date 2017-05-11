/**
 * Created by abhi on 5/8/2017.
 */
import {NgModule} from '@angular/core'
import {lazyComponent} from './lazyComponent'
import {lazyRoutes} from './lazyRoutes'


@NgModule({
    imports:[lazyRoutes],
    declarations:[lazyComponent],
})


export class lazyRootModule{}