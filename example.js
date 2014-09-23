// Require Twitter Feed
var stream = require('./pubnub-twitter.js');

// Receive Tweet Stream
stream(function(tweet){
    console.log( "tweet -> ", JSON.stringify(tweet) );
});
