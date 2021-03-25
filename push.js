var push = require('web-push')

let vapidKeys ={
    publicKey: 'BAzS1GfHLHEQM6F3yYjmXjqDjas35i2aI6Tq_w5yXS9d8zZ-Y4KaOJxZT7zLeWIj9L3Du-bPQMlT_En3O_FXbno',
    privateKey: 'yq4mK060fwQznuUj-G7UTwckDj_dQoaBwSih-1wlgKg'
  }

  push.setVapidDetails('mailto:jesusoncevqz14@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {};
  
  push.sendNotification(sub, 'test message')