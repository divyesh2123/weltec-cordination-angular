import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is the data';
  cities= ["vadodara","ahemedabad","pune"];

  jsonvalues = [

    {
      name: "test",
      code : 1
    },
    {
      name : "test1",
      code :2
    }


  ];
}
