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
    "https://fcm.googleapis.com/fcm/send/f0TQx-QIJ_Q:APA91bHWLJlDmsuaqxU7atP_CYJpZIRsZ77rPRsFkglXgBdHiCPhv6yJsfEkG6YtPmuTWzI0ZRV1Mocc2KdIwSF3gNJet18zb2Z8dYbTu7E2-RDIE5xoLGhUvmPEO6DB9TKpBNUi0wk8",
  expirationTime: null,
  keys: {
    p256dh:
      "BJeJNa0vpOpGgtUYXn3-wbbSa5LCs3672BLsS1924mIgw5pRS_6BXaWs8jOGRhliwfb1i_MkTT0I9QUDCJxgQR4",
    auth: "F-uM15mdMoqfRuN8iK_JLw",
  },
};

push.sendNotification(subscription, 'hello world!')
  .then((res) => {
    console.log('notification response: ', res);
  })
  .catch((err) => {
    console.error('failed to send notification', err);
  });
