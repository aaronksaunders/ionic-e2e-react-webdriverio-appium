import { clearIndexedDB, pause, restartApp, url } from '../helpers';

import Schedule from '../pageobjects/schedule.page';
import SessionDetail from '../pageobjects/session-detail.page';

describe('Session Detail', () => {
  beforeEach(async () => {
    await restartApp('/app/tabs/schedule/session/1');
    await clearIndexedDB('_ionicstorage');
    await url('/app/tabs/schedule/session/1');
    await pause(500);
  });

  it('Should load first session', async () => {
    const title = await SessionDetail.sessionTitle;
    await expect(await title.getText()).toBe('Breakfast');
  });

  it('Should favorite session', async () => {
    const button = await SessionDetail.favoriteButton;
    await button.tap();
    const backButton = await SessionDetail.backButton;
    await backButton.tap();

    const favoritesButton = await Schedule.segment.button('Favorites');
    if (favoritesButton) {
      await (await favoritesButton.$).waitForDisplayed();
      await favoritesButton.tap();
    } else {
      throw new Error('Favorites button not found');
    }
    const item = await (await Schedule.content.$).$('ion-item');
    const h3 = await item.$('h3');
    await expect(h3).toHaveText('Breakfast');
  });
});
