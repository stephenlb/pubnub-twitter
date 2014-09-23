# PubNub Twitter Firehose Live Stream

Live tweets in realtime, easy.

##### NPM Install

```bash
npm install pubnub-twitter
```

##### Example Node JS
```javascript
var stream = require('pubnub-twitter');
stream(function(tweet){
    console.log( "Tweet: ", JSON.stringify(tweet) );
});
```

## NPM pubnub-twitter

[PubNub Twitter Firehose Live Stream](https://www.npmjs.org/package/pubnub-twitter)

## Web Browser Firehose

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
