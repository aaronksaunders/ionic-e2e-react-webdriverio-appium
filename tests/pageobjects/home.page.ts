import { Ionic$, IonicButton, IonicSelect } from '../helpers';

import Page from './page';

class Home extends Page {
  get messages() {
    return Ionic$.$$('ion-item');
  }

  get title() {
    return Ionic$.$('ion-title');
  }
}

export default new Home();
