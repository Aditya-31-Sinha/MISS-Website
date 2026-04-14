function openTab(name) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(name).classList.add('active');
  document.querySelector('[data-tab="' + name + '"]').classList.add('active');
}

function submitForm(e, id) {
  e.preventDefault();
  var nameField  = e.target.querySelector('[name=name]');
  var emailField = e.target.querySelector('[name=email]');
  var name  = nameField  ? nameField.value.trim()  : 'x';
  var email = emailField ? emailField.value.trim() : '';

  if (nameField  && !name)                { alert('Please enter your name.');     return; }
  if (emailField && !email.includes('@')) { alert('Please enter a valid email.'); return; }

  var msg = document.getElementById(id);
  if (!msg) return;
  msg.textContent   = 'Thank you! We will get back to you soon.';
  msg.style.display = 'block';
  e.target.reset();
  setTimeout(function () { msg.style.display = 'none'; }, 5000);
}

document.addEventListener('DOMContentLoaded', function () {
  var page = location.pathname.split('/').pop();
  if (!page || page === '') page = 'index.html';
  document.querySelectorAll('nav a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('active-page');
  });
});

(function () {
  var el = document.getElementById('typed-word');
  if (!el) return;

  var phrases     = ['Making Your Safer Tomorrow', 'Your Safety is Our Priority'];
  var phraseIndex = 0;
  var charIndex   = 0;
  var deleting    = false;

  function tick() {
    var current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.substring(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 2200);
        return;
      }
      setTimeout(tick, 75);
    } else {
      charIndex--;
      el.textContent = current.substring(0, charIndex);
      if (charIndex === 0) {
        deleting    = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 38);
    }
  }
  setTimeout(tick, 800);
})();