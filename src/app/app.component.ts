import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs: { path: string, name: string }[] = [
    { path: '/charts', name: 'Charts' }
  ];
}
