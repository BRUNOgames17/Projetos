self.addEventListener('install', function(evt){
  console.log('install sw');
})

self.addEventListener('active', function(evt){
  console.log('active sw');
})

self.addEventListener('fetch', function(evt){
  console.log('fetch sw');
})
