import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private lottieSplashScreen: LottieSplashScreen
  ) {
    platform.ready().then(()=> {
      this.lottieSplashScreen.show('https://assets6.lottiefiles.com/packages/lf20_12G4mZ.json', false, 1024, 768)
    })

    this.initializeApp();
  }

  initializeApp() {
    this.lottieSplashScreen.show();

    this.platform.ready().then(() => {

      this.statusBar.styleDefault();

      setTimeout(() => {
        this.lottieSplashScreen.hide()
      }, 4000);


    });
  }
}
