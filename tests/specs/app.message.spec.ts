import { clearIndexedDB, pause, restartApp, url, getUrl } from '../helpers';

import Message from '../pageobjects/message.page'

describe('Message', () => {
  beforeEach(async () => {
    await restartApp('/message/1');
    await url('/message/1');
    await pause(500);
  });


    it('Should Show Detail Page Id 1', async () => {

      const messageTitle = await Message.messageTitle;
      expect(await messageTitle.getText()).toContain("Long time no chat")

      const messageTo = await Message.to;
      expect((await messageTo.getText()).startsWith("Lauren Ruthford")).toBeTruthy()

      await (await Message.backButton).tap();
      await pause(500);

      const url = await getUrl();
      expect(url.toString()).toContain('/home')
      
    });
});
