// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Dependancies and Setup
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var subkey  = 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe';
var channel = 'pubnub-twitter';
var pubnub  = require('pubnub')({ subscribe_key : subkey });

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// PubNub Twitter Live Firehose Stream Feed
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var pubtwit = function(cb) {

    // Callback with Default
    var cb = cb || function(m){ console.log(m) };

    // Process Stream of Tweets
    function tweets(tweet) { cb(tweet) }

    // Open TCP Socket
    pubnub.subscribe({ channel : channel, message : tweets });

};

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Export Interface
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
module.exports = pubtwit;
