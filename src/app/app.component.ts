import { Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TemplateDesign';
  incomeValue: number = 100000;
  incomeOptions: Options = {
    floor: 100000,
    ceil: 300000
  };

  expenseValue: number = 100000;
  expenseOptions: Options = {
    floor: 100000,
    ceil: 300000
  };
}
