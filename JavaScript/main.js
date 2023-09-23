const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');

function toggleMode() {
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode' 
    : 'Light Mode';


}

modeToggle.addEventListener('click', toggleMode);
