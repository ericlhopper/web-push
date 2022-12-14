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
let subscription = 
{ endpoint: "https://fcm.googleapis.com/fcm/send/dwV9k8S_a_U:APA91bHQDwE7AbZa8TGy7x7vC2OB0m6axVruYFm16qG_TOULek0p99YpepBU0biD_ENhBmQqNI2VDPb54n-trIaRR2ZhbxpFmvEz-1SvdFQ3cWVnwABg1ea5q3XCZ1ppk7Qs-JiZ1clZ"
, expirationTime: null
, keys:
  { p256dh: "BHbkwrQm8_X5r-hlcjyyj8CRu6yBm45gsBXcKrCjP6obKziPlkPkXSvIlxwNUQ5lFDWcnfPxgLTHPaaRSs5zCmc"
  , auth: "7ZwyGQdXxm4rZzIc-U81yg"
  }
};

push.sendNotification(subscription, 'hello world!')
  .then((res) => {
    console.log('notification response: ', res);
  })
  .catch((err) => {
    console.error('failed to send notification', err);
  });
