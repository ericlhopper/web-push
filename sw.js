self.addEventListener('push', (e) => {

  //const data = e.data.json();
  
  self.addEventListener('notificationclick', function(e) {
    //var doge = e.notification.data.doge;
    window.open('https://agent.dev.cozera.io/#demo1');
  });

  const title = 'id-go Authentication request';

  const options = {
    body: 'Proceed to accept or reject this authentication reqeust',
    requireInteraction: true, // visible until user clicks or dismisses
    vibrate: [200, 100, 200, 100, 200, 100, 200], // vibration patter to play when notification is dislpayed
    icon: './img/id-go.png',
  };
  
  self.registration.showNotification(title, options)
    .then(()=>{
      console.log('calling showNotification()')
    })
    .catch((err) => {
      console.error(`showNotification error: ${err}`)
    })
});