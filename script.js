document.addEventListener('DOMContentLoaded', function() {
  const tagInput = document.getElementById('tag');
  const descricaoInput = document.getElementById('descricao');
  const adicionarBtn = document.getElementById('adicionar');
  const instrumentList = document.getElementById('instrumentList');

  // Carrega os instrumentos salvos anteriormente
  const savedInstruments = JSON.parse(localStorage.getItem('instruments')) || [];
  savedInstruments.forEach(displayInstrument);

  // Adiciona um novo instrumento
  adicionarBtn.addEventListener('click', function() {
  const tag = tagInput.value.trim();
  const descricao = descricaoInput.value.trim();

  if (tag && descricao) {
    const newInstrument = { tag, descricao };
    displayInstrument(newInstrument);
    savedInstruments.push(newInstrument);
    localStorage.setItem('instruments', JSON.stringify(savedInstruments));
    tagInput.value = '';
    descricaoInput.value = '';
    tagInput.focus();
  } else {
    alert('Por favor, preencha TAG e Descrição!');
  }
});

function displayInstrument(instrument) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>TAG:</strong> ${instrument.tag} <br> <strong>Descrição:</strong> ${instrument.descricao}`;
  instrumentList.appendChild(li);
}
}); // Fecha o evento DOMContentLoaded
