import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link:'home', icon: 'po-icon-home'},
    { label: 'Currículos', link:'/curriculoform' , icon: 'po-icon-document' },
    { label: 'DashBoard Currículos',  link:'/curriculolist', icon: 'po-icon-chart-area' },
    { label: 'Vagas', link:'/jobform' , icon: 'po-icon-search'},
    { label: 'DashBoard Vagas',  link:'/joblist', icon: 'po-icon-chart-area' }
  ];

  

 

}
