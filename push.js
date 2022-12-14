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
{ endpoint: "https://fcm.googleapis.com/fcm/send/cSJQHSoh_EY:APA91bGm2JKu_cdRydoQGyqa_rv0c2vvSnHkMR_ZuiBkdb7Cnd-LKzEy3-Ki9b4iDEAn22v_b6rSIZBK0qkT3rTSylxy9x3z0VLA8vqzQhuULy5SxVSSNAHOs29wpz7XcTz5tKj--eUC"
, expirationTime: null
, keys:
  { p256dh: "BEB-2wDA3L2-Ax0QnF87d89Crf7BXKG9Sw4l9L-LWYGe_Bfk06KyfB0aoBJgLB13Jk_mppl1iQZsUvj8alCgUYA"
  , auth: "7KzDFGW_BBf9HJ1GO1PDaQ"
  }
};

push.sendNotification(subscription, 'hello world!')
  .then((res) => {
    console.log('notification response: ', res);
  })
  .catch((err) => {
    console.error('failed to send notification', err);
  });