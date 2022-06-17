self.addEventListener('push', (e) => {

  //const data = e.data.json();
  
  //self.registeration.sendNotification(data.title);
  
  self.registeration.sendNotification('Hello World', {body: 'test body'})

});