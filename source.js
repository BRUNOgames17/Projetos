if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function(){ console.log('serviceWorker está registrado') })
    .catch(function(){ console.log('Erro ao registrar serviceWorker') })
}
function shareIMG(titulo, texto, url){
if (navigator.share) {
  navigator.share({
    title: titulo,
    text: texto,
    url: url,
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
}
}
