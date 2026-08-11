document.getElementById('create-market-button').onclick = function () {
  document.getElementById('modal').classList.remove('_hidden');
};

document.querySelector('#modal .close-button').onclick = function () {
  document.getElementById('modal').classList.add('_hidden');
};

document.querySelector('#modal .backdrop').onclick = function () {
  document.getElementById('modal').classList.add('_hidden');
};
