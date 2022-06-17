var push = require("web-push");

//var keys = push.generateVAPIDKeys();
//console.log(keys);

let keys = {
  publicKey:
    "BMDwYkYu4jJfJff4lAytigMUnEb0J7nv_LYLwFhV4I9o_-6Dvf_ceNLN8yshkpwlQovddTuz9tgOU9gUgOuFks0",
  privateKey: "wsgBpk6li-IPrKzwxLfutnACbncMmx2Ce57xCesU4QU",
};

push.setVapidDetails(
  "mailto:eric.hopper@cozera.io",
  keys.publicKey,
  keys.privateKey
);

// the following json object is created and logged to the console in the index.html subscribe() function
// this value would normally be logged into a database. Used to send push notification back to the browser.
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fhT90wDOmY8:APA91bG5r-GxIS1tHhOdqP7DmSkaf9DGYCgaCZDreiL_pPfBI-5uUlK5ezgUdtm2rjfvj2on3hKd_s5P8ZKa-MlAsrICRlQFfMc1fuP0j5ABSMTd6iTnCxKoy1K0sfjBy45YPbt8pQ8G",
  expirationTime: null,
  keys: {
    p256dh:
      "BHbb-BGExc4X22Fa4yLgRe8T5JE8O9Y8qzMtJXofVQzg2FRq7-lx9_VcLzEgUKhH-M6WelclyX9AtpxOlnl-64A",
    auth: "09-8SL_Sw2MTRKfWsYqPOw",
  },
};
push.sendNotification(sub);
