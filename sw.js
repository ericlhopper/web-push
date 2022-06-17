self.addEventListener('push', (e) => {

  //const data = e.data.json();
  
  //self.registration.sendNotification(data.title);
  
  self.registration.showNotification('Hello World')
  .then(()=>{
    console.log('calling showNotification()')
  })
  .catch((err) => {
    console.error(`showNotification error: ${err}`)
  })

});