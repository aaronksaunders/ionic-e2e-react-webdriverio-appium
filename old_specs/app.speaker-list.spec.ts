import {
  clearIndexedDB,
  pause,
  restartApp,
  url,
} from '../helpers';

import SpeakerList from '../pageobjects/speaker-list.page';

describe('Speaker List', () => {
  beforeEach(async () => {
    await restartApp('/app/tabs/speakers');
    await clearIndexedDB('_ionicstorage');
    await url('/app/tabs/speakers');
    await pause(500);
  });

  it('Should load speakers', async () => {
    const speakers = await SpeakerList.speakers;

    expect(speakers.length).toBe(13);
  });
});
