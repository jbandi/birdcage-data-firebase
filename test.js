import 'babel-polyfill';
import assert from 'assert';

import {repo} from './lib/index';

describe('Tweet Repository', () => {
    it('should return tweets', async () => {
        // await repo.init();
        const tweets = await repo.getTweets();
        assert(tweets.length > 0);
    });

    it('should add a tweet', async () => {
        // await repo.init();
        const initialTweets = await repo.getTweets();
        await repo.addTweet({title: `Hello at ${new Date()}`});
        const newTweets = await repo.getTweets();
        assert.equal(initialTweets.length + 1, newTweets.length);
    })
});
