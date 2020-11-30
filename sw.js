const cacheName="site1.1"
self.addEventListener('install', function(evt){
  console.log('install sw');
})

self.addEventListener('active', function(evt){
  console.log('active sw');
  evt.waitUntil(
caches.keys( ).then(function(keys)){
return promise.all(
   keys
  .filter(key => key !== cacheName)
  .map(key => caches.delete(key))
)}
)

})

self.addEventListener('fetch', function(evt){
  console.log('fetch sw');
})
