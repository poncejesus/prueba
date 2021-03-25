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

  let sub = {};
  
  push.sendNotification(sub, 'test message')
