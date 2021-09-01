import { Component } from '@angular/core';
import { Selfie } from './models/selfie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Ahmed FirstAngularApp';
  subtitle = 'Sélfie à wookie';
  afficheImage =true;
  lesSelfies : Selfie[]=[{image:'',wookie:{name:'Chewie',selfies:[]}},
                         {image:'',wookie:{name:'Chewie 2',selfies:[]}}
                        ];

}
