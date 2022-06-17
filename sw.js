self.addEventListener('push', (e) => {

  //const data = e.data.json();
  
  //self.registration.sendNotification(data.title);
  
  self.registration.showNotification('Hello World')

});