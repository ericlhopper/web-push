self.addEventListener('push', (e) => {

  //const data = e.data.json();
  
  //self.registration.sendNotification(data.title);
  
  self.registration.sendNotification('Hello World', {body: 'test body'})

});