import { clearIndexedDB, pause, restartApp, url } from '../helpers';

import Account from '../pageobjects/account.page';
import Login from '../pageobjects/login.page';

describe('Account', () => {
  beforeEach(async () => {
    await restartApp('/login');
    await clearIndexedDB('_ionicstorage');
    await url('/login');
    await pause(500);
    await Login.login('test', 'test');
    await pause(500);
    await url('/account');
  });

  it('Should open change username alert', async () => {
    await Account.changeUsernameButton.tap();
    await pause(500);
    const input = await Account.changeUsernameAlert.input;
    await input.setValue('newusername');
    const okButton = await Account.changeUsernameAlert.button('Ok');
    await okButton.click();
    await url('/login');
    await pause(500);
    await url('/account');
    const usernameLabel = await Account.usernameLabel;
    expect(await usernameLabel.getText()).toBe('newusername');
  });
});
