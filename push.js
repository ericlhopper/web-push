var push = require("web-push");

let vapidKeys = {
  publicKey: 'BFLar7l4oJVMiHQehmd0N9gh2at7x1yWdAUB9KIhOT4-n9kIdUcbyuWIS1clEy5ciD-3oEYGU9ThHlarxsQxlH8',
  privateKey: '996rZEmxqFkzn4-Amhxwa9q-BafUIh_bIhYjEJWD-LU'
};

push.setVapidDetails(
  'mailto:eric.hopper@cozera.io', // process.env.VAPID_WEB_PUSH_CONTACT,
  vapidKeys.publicKey, // process.env.VAPID_PUBLIC_KEY,
  vapidKeys.privateKey, // process.env.VAPID_PRIVATE_KEY
)

// the following json object is created and logged to the console in the index.html subscribe() function
// this value would normally be logged into a database. Used to send push notification back to the browser.
let subscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fhT90wDOmY8:APA91bG5r-GxIS1tHhOdqP7DmSkaf9DGYCgaCZDreiL_pPfBI-5uUlK5ezgUdtm2rjfvj2on3hKd_s5P8ZKa-MlAsrICRlQFfMc1fuP0j5ABSMTd6iTnCxKoy1K0sfjBy45YPbt8pQ8G",
  expirationTime: null,
  keys: {
    p256dh:
      "BHbb-BGExc4X22Fa4yLgRe8T5JE8O9Y8qzMtJXofVQzg2FRq7-lx9_VcLzEgUKhH-M6WelclyX9AtpxOlnl-64A",
    auth: "09-8SL_Sw2MTRKfWsYqPOw",
  },
};

push.sendNotification(subscription, 'hello world!')
  .then((res) => {
    console.log('notification response: ', res);
  })
  .catch((err) => {
    console.error('failed to send notification', err);
  });
