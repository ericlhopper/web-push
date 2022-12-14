var push = require("web-push");

let vapidKeys = {
  publicKey: 'BL2bZBtCnH7LHkiOfTR-yOFSWYVckXjVAWKVZJbIIpZihBw8NTiJrwoIx0IzQRgY0m7rdZkyZ0nmK_YBJrUZ5nU',
  privateKey: 'YcPL386xhMK-n1h5XFrbAJjwBlym921apYSIvo8Y1ag'
};

push.setVapidDetails(
  'mailto:eric.hopper@cozera.io', // process.env.VAPID_WEB_PUSH_CONTACT,
  vapidKeys.publicKey, // process.env.VAPID_PUBLIC_KEY,
  vapidKeys.privateKey, // process.env.VAPID_PRIVATE_KEY
)

// the following json object is created and logged to the console in the index.html subscribe() function
// this value would normally be logged into a database. Used to send push notification back to the browser.
let subscription = 
{ endpoint: "https://fcm.googleapis.com/fcm/send/fyBm-hKX79Q:APA91bHjYCAQ3FvesqW7qCaoFFEo3d10cDhwkLBUrQ1gm20Jkpa5FuBtqOnh7QPgfDY_vMjKX0jPxLuJnSRGLnNWvjwAtk_9L51QkmuxWXpmarE_SxIYZRj_4F6eQ-AFlBvTpXJLUud6"
, expirationTime: null
, keys:
  { p256dh: "BFjN0Hl4quv_BP3I25jPhKpsFrHtisEbd9h12qokcsvtafhpckqepJBHyzr7Jt_ncWGF2KWb8kSkWmOTQQmJtMw"
  , auth: "nNH5Sn6XQ7M37gyroXehbg"
  }
};

push.sendNotification(subscription, 'hello world!')
  .then((res) => {
    console.log('notification response: ', res);
  })
  .catch((err) => {
    console.error('failed to send notification', err);
  });
