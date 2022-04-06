import { Ionic$, IonicButton, IonicSelect } from '../helpers';

import Page from './page';

class Message extends Page {
  get messageTitle() {
    return Ionic$.$('h1');
  }

  get backButton() {
    return new IonicButton('ion-back-button');
  }

  get to() {
    return Ionic$.$('h2');
  }
}

export default new Message();
