const webPush = require("web-push");
const vapidKeys = {
  publicKey:
    "BIw2abIB0mCa5LNkulZlMqgLk5fSdPxg6WUzryC9WIKB0IeNY1jxH3Os2fNOEivyd0ZXPsROfOjp3gOMMlGrNdk",
  privateKey: "d0oUJzeCXjuGtM7BKu1PwYEur9SUJhZ_1WgBvyPyoVA",
};

webPush.setVapidDetails(
  "mailto:devanandkariya@gmail.com", // Change to your email
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
const subscription = {
  endpoint:
    "https://web.push.apple.com/QIuDTaFnBEHrR_pwinoebV6f_QFDproEI3APV1E3pca7qgfuhCT_d97wQs6n4MRDdBIaLGyLkOuwdC5HaBgalk1Xvc4YXO_CoWB1Yh1PcCB1Jvgzb0z0Plyhdhk12MAXaGWP6PmpvmpzV7qgiAx2PWAJ9n1847_7q07EEJdbilUA",
  keys: {
    p256dh:
      "BCtmBQraGM1SMvf65sYeSBFw_RkUpDP0efMh_HWKqICA 7dBa-dYe9wR1rD66Xjt7ovvXmyrb9trrT7sTt5MB4q0",
    auth: "Yob8DRpwXmz50sf30AN08g",
  },
};

const notificationPayload = {
  notification: {
    title: "Angular News",
    body: "Newsletter Available!",
    icon: "icons/icon-72x72.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Go to the site",
      },
    ],
  },
};

webPush
  .sendNotification(subscription, JSON.stringify(notificationPayload))
  .then((result) => console.log(result))
  .catch((error) => {
    console.error(error);
  });
