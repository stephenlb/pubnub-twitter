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
