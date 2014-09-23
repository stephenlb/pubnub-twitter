# PubNub Twitter Firehose Live Stream

Live tweets in realtime, easy.

##### NPM Install

```bash
npm install pubnub-twitter
```

Wohh this stream is super fast with lots of tweets; a lot of tweets.  You'll be able to see a lot of tweets from all over the world at super light speed.
> You can see a live feed preview on [PubNub Dev Console](www.pubnub.com/console/?channel=pubnub-twitter&sub=sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe).

Now to the copy/paste sections for your ease of use.

##### Example Node JS
```javascript
var stream = require('pubnub-twitter');
stream(function(tweet){
    console.log( "Tweet: ", JSON.stringify(tweet) );
});
```

## NPM pubnub-twitter

You can find the NPM package details on npm.org

[PubNub Twitter Firehose Live Stream](https://www.npmjs.org/package/pubnub-twitter)

## Web Browser Twitter Firehose

You can receive tweets in a streaming firehose directly in your web browser.

```html
<script src="https://cdn.pubnub.com/pubnub.min.js"></script>
<script>
PUBNUB({
    subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
}).subscribe({
    channel : 'pubnub-twitter',
    message : function(tweet) {

        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        // Receive Tweets in your Browser!
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        console.log(tweet);

    }
});
</script>
```
