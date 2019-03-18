import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit() {

    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBWeYfLYdCyvoOK2wEAQbCreGaWy2DgAO4',
      authDomain: 'myproject-dc965.firebaseapp.com',
      databaseURL: 'https://myproject-dc965.firebaseio.com',
      projectId: 'myproject-dc965',
      storageBucket: 'myproject-dc965.appspot.com',
      messagingSenderId: '302055847211'
    };
    firebase.initializeApp(config);
  } //oninit
}
