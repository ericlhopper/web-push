var push = require('web-push')

//var keys = push.generateVAPIDKeys();
//console.log(keys);


let keys = {
  publicKey: 'BMDwYkYu4jJfJff4lAytigMUnEb0J7nv_LYLwFhV4I9o_-6Dvf_ceNLN8yshkpwlQovddTuz9tgOU9gUgOuFks0',
  privateKey: 'wsgBpk6li-IPrKzwxLfutnACbncMmx2Ce57xCesU4QU'
};

push.setVapidDetails('mailto:eric.hopper@cozera.io', keys.publicKey, keys.privateKey)

let sub = '';
push.sendNotification(sub)