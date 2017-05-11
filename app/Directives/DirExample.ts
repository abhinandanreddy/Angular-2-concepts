/**
 * Created by abhi on 5/1/2017.
 */

import {Directive,Input,ElementRef,HostListener} from '@angular/core'

@Directive({
    selector:'[my-highlighter]'
})

export class DirExample{

    @Input('my-highlighter') highlightColor:string;
    @Input() default:string;

    constructor(private el:ElementRef){
        el.nativeElement.style.background='yellow';
    }
   @HostListener('mouseenter') onmouseenter(){
    this.el.nativeElement.style.background=this.highlightColor || this.default || 'red';
    }

    @HostListener('mouseleave') onmouseleave(){
        this.el.nativeElement.style.background='orange';
    }

}
