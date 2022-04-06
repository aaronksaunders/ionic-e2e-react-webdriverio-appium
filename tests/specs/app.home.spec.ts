import { clearIndexedDB, pause, restartApp, url, getUrl } from '../helpers';

import Home from '../pageobjects/home.page';
import Message from '../pageobjects/message.page'

describe('About', () => {
  beforeEach(async () => {
    await restartApp('/home');
    await url('/home');
    await pause(500);
  });

    it('Should load messages', async () => {
      const messages = await Home.messages;
      expect(messages.length).toBe(8);
    });

    it('Should show title', async () => {
      /**  @type WebdriverIO.Element */
      const title = await Home.title;
      expect(await title.getText()).toBe("Inbox");
    });

    it('Should click link and go to next page', async () => {
      const messages = await Home.messages;
      expect(messages.length).toBe(8);
      await messages[0].click()

      await pause(500);
      const url = await getUrl();
      expect(url.toString()).toContain('/message/0')

      const messageTitle = await Message.messageTitle;
      expect(await messageTitle.getText()).toContain("New event: Trip to Vegas")

      const messageTo = await Message.to;
      expect((await messageTo.getText()).startsWith("Matt Chorsey")).toBeTruthy()
      
    });
});
