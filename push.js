var push = require('web-push');

let vapidKeys ={
    publicKey: 'BJBSBhjquKl_pJU7u0YCFO6r96Eh22WGV2Q7h3s6Au29obZD4BbE82Ucf8jtbotPCJYOk_RIuylykGP5PyHN1SY',
    privateKey: 'gZTIue5TXNqlgQeN2UzurKrTSzUTP-Ef93w1wQTRcGU'
  };

  push.setVapidDetails(
      'mailto:jesusoncevqz14@gmail.com', 
    vapidKeys.publicKey, 
    vapidKeys.privateKey
    );

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/ffRC9d91v3c:APA91bEQq7mIlh8AouU1O0GtyDE_kC90Y_Bgg1FfXJ8a5zwLfJN1MbiLzPMYTt9oDcbG7C1rKaIY6e0XZ-TMiEVY4ye36UWj1Ns2pamQHGz7IXowesKrWfjs3Py69vOCQdvwsmv1NJpb",
  "expirationTime":null,
  "keys":{"p256dh":"BI3tIfHarj_z_hh2844481Tn1DU0lbftmVegwhaQ7nG0uWxlZ9vujhG_MPaXzc89Xf7IoQvDICaFfo7CPlt0v5Q",
  "auth":"swxc1-ClVyfp_1lsbwkVRA"}
};

