var push = require("web-push");

var vapidKeys = push.generateVAPIDKeys();
console.log(vapidKeys);
