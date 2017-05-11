/**
 * Created by abhi on 5/1/2017.
 */

import {Component} from '@angular/core'

@Component({
    selector:'dir-com',
    template:`<h1 my-highlighter>Directive made the background color yellow</h1>
      <hr/>
          <h3>Highlight By Selection</h3>
          <div>
              <input type="radio" name="green" (click)="color='orange'">orange
              <input type="radio" name="green" (click)="color='green'">green
              <input type="radio" name="green" (click)="color='cyan'">cyan
          </div>
          <p [my-highlighter]="color">highligthed text</p>
          <p [my-highlighter]="color" default="red">highligthed text</p>
`
})


export class DirectiveComponent{

}