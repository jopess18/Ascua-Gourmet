// Menú adaptable (móvil y tableta)
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  btn.setAttribute('aria-expanded', abierto);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('abierto'); btn.setAttribute('aria-expanded', 'false'); }
});

// Filtro de la carta
const filtros = document.querySelectorAll('.filtro');
const platos = document.querySelectorAll('.plato');
filtros.forEach(f => f.addEventListener('click', () => {
  filtros.forEach(x => x.classList.remove('activo'));
  f.classList.add('activo');
  platos.forEach(p => { p.hidden = f.dataset.cat !== 'todos' && p.dataset.cat !== f.dataset.cat; });
}));

// Formulario de reserva con validación
const form = document.getElementById('formReserva');
const msg = document.getElementById('msg');
document.getElementById('fecha').min = new Date().toISOString().split('T')[0];
form.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();
  if (nombre.length < 3 || !form.fecha.value) {
    msg.textContent = 'Escribe tu nombre (mínimo 3 letras) y elige una fecha.';
    return;
  }
  msg.textContent = `Gracias, ${nombre}. Reserva para ${form.personas.value} personas el ${form.fecha.value} (demostración).`;
  form.reset();
});
