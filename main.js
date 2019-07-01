var title = document.querySelector('.bold-text');
var button = document.querySelector('.dog-name-btn');
var input = document.querySelector('.name-input-field');

button.addEventListener('click', function(e) {
  e.preventDefault();
  title.innerHTML = input.value;
  input.value = '';
});