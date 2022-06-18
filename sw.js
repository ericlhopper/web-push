self.addEventListener('push', (e) => {

  self.addEventListener('notificationclick', (event) => {
    console.log('On notification click: ', event.notification?.tag);
    // Android doesn't close the notification when you click on it
    // See: http://crbug.com/463146
    event.notification.close();

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(
      clients.matchAll({
        type: "window"
      })
      .then((clientList) => {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url == '/' && 'focus' in client)
            return client.focus();
        }
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
    );
  });

  const title = 'id-go Authentication request';

  const options = {
    body: 'Proceed to accept or reject this authentication reqeust',
    requireInteraction: true, // visible until user clicks or dismisses
    vibrate: [200, 100, 200, 100, 200, 100, 200], // vibration patter to play when notification is dislpayed
    icon: './img/unitus-logo.png',
  };
  
  self.registration.showNotification(title, options)
    .then(()=>{
      console.log('calling showNotification()')
    })
    .catch((err) => {
      console.error(`showNotification error: ${err}`)
    })
});