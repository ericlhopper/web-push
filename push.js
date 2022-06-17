var push = require("web-push");

//var keys = push.generateVAPIDKeys();
//console.log(keys);

let keys = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fhT90wDOmY8:APA91bG5r-GxIS1tHhOdqP7DmSkaf9DGYCgaCZDreiL_pPfBI-5uUlK5ezgUdtm2rjfvj2on3hKd_s5P8ZKa-MlAsrICRlQFfMc1fuP0j5ABSMTd6iTnCxKoy1K0sfjBy45YPbt8pQ8G",
  expirationTime: null,
  keys: {
    p256dh:
      "BHbb-BGExc4X22Fa4yLgRe8T5JE8O9Y8qzMtJXofVQzg2FRq7-lx9_VcLzEgUKhH-M6WelclyX9AtpxOlnl-64A",
    auth: "09-8SL_Sw2MTRKfWsYqPOw",
  },
};
push.sendNotification(keys);
