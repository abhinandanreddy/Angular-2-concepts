import { Component } from '@angular/core';
@Component({
  selector: 'basic',
  templateUrl: './app/FormValidation/app.component2.html',
  styles: [`
    input.ng-invalid{border-left: 5px solid red;}
    .ng-valid[required]{border-left: 5px solid green;}
  `]
})
export class AppComponent {
  public myName = 'Vishwas';
  onSubmit(value: any){
    console.log(value);
  }
  public obj=[
      { name:'Abhi',
        location:'sunnyvale'
      },
      {name:'xyz',
      location:'xyz'}
      ];
 }
