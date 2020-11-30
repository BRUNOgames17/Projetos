var contatos = localStorage.getItem("contatos");
contatos = JSON.parse(contatos);
if (contatos == null) {
  contatos = [];
}
var ctt = {};

function preencherTab() {
  for (var i in contatos) {
    var contato = JSON.parse(contatos[i]);
    add_Tabela(contato);
  }

}

function adicionarDados() {
  let nome = document.getElementById('nome').value;
  let num = document.getElementById('tel').value;
  let email = document.getElementById('email').value;

  ctt = {
    nome: nome,
    tel: num,
    email: email,
  }

  contatos.push(JSON.stringify(ctt));
  localStorage.setItem("contatos", JSON.stringify(contatos));
  add_Tabela(ctt);
}

function add_Tabela(ctt) {
  let tr = document.createElement("tr");
  let tdNome = document.createElement("td");
  let tdTel = document.createElement("td");
  let tdEmail = document.createElement("td");

  tdNome.append(ctt.nome);
  tdTel.append(ctt.tel);
  tdEmail.append(ctt.email);

  tr.appendChild(tdNome);
  tr.appendChild(tdTel);
  tr.appendChild(tdEmail);

  document.getElementById('contatos').append(tr);
}

function shareIMG(titulo, texto , url){
if (navigator.share) {
  navigator.share({
    title: titulo,
    text: texto,
    url: url,
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));

}















