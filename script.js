/* ═══════════════════════════════════════════════
   LA BRASA — SCRIPT
═══════════════════════════════════════════════ */

/* ── NAVBAR ─────────────────────────────────── */
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 600);
}, { passive: true });

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── HERO PARALLAX ─────────────────────────── */
const heroImg = document.getElementById('heroImg');
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    heroImg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
}, { passive: true });

/* ── REVEAL ON SCROLL ──────────────────────── */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── COUNT-UP ANIMATION ────────────────────── */
const countObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el     = e.target;
    const target = +el.dataset.target;
    const suffix = target === 98 ? '%' : (target === 3 ? '' : '');
    const dur    = 1800;
    const step   = dur / target;
    let current  = 0;
    const timer  = setInterval(() => {
      current++;
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, step);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.strip-num').forEach(el => countObserver.observe(el));

/* ── CARTA / MENU TABS ─────────────────────── */
const menuData = {
  entrantes: [
    {
      name: 'Tartar de atún rojo',
      desc: 'Aguacate, soja ponzu, sésamo tostado y chips de arroz',
      price: '24€',
      tags: ['Sin gluten', 'Destacado'],
      img: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=200&q=80',
    },
    {
      name: 'Croquetas de cocido madrileño',
      desc: 'Receta de la abuela, bechamel artesana y rebozado crujiente',
      price: '16€',
      tags: ['Artesano'],
      img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&q=80',
    },
    {
      name: 'Vieira a la brasa',
      desc: 'Mantequilla noisette, caviar de trucha y cebollino',
      price: '28€',
      tags: ['Sin gluten', 'Chef recomienda'],
      img: 'https://images.unsplash.com/photo-1565695040890-f8e0b8a4b9d8?w=200&q=80',
    },
    {
      name: 'Pan de masa madre con mantequilla ahumada',
      desc: 'Horneado en el momento, mantequilla infusionada 48h en chips de roble',
      price: '8€',
      tags: ['Artesano'],
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&q=80',
    },
    {
      name: 'Foie micuit con manzana caramelizada',
      desc: 'Pan brioche tostado, reducción de Oporto y sal Maldon',
      price: '26€',
      tags: ['Temporada'],
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80',
    },
    {
      name: 'Pulpo a la brasa',
      desc: 'Crema de patata ahumada, pimentón de La Vera y aceite de oliva virgen',
      price: '32€',
      tags: ['Sin gluten', 'Destacado'],
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80',
    },
  ],
  principales: [
    {
      name: 'Chuletón de buey gallego 1kg',
      desc: 'Madurado 60 días, sal gruesa y chimichurri de hierbas frescas',
      price: '85€',
      tags: ['Sin gluten', 'Estrella de la casa'],
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=200&q=80',
    },
    {
      name: 'Solomillo Wagyu A5',
      desc: 'Japonés A5, salsa teriyaki de reducción, espárrago blanco y trufa negra',
      price: '120€',
      tags: ['Sin gluten', 'Premium'],
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200&q=80',
    },
    {
      name: 'Rodaballo salvaje a la brasa',
      desc: 'Mantequilla de algas, ensalada de hinojo y limón asado',
      price: '58€',
      tags: ['Sin gluten', 'Del mar'],
      img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=200&q=80',
    },
    {
      name: 'Costillar de cordero lechal',
      desc: 'Glaseado de romero y miel, ratatouille provenzal',
      price: '42€',
      tags: ['Sin gluten'],
      img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&q=80',
    },
    {
      name: 'Lubina salvaje a la sal',
      desc: 'Costra de sal marina, aceite de oliva extra virgen y patatas panaderas',
      price: '48€',
      tags: ['Sin gluten', 'Temporada'],
      img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=200&q=80',
    },
    {
      name: 'Risotto de setas y trufa negra',
      desc: 'Parmesano 36 meses, aceite de trufa y cebollino',
      price: '34€',
      tags: ['Vegetariano', 'Temporada'],
      img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=200&q=80',
    },
  ],
  postres: [
    {
      name: 'Tarta de queso al horno ahumado',
      desc: 'Queso de La Vera, mermelada de higo y galleta de avena',
      price: '14€',
      tags: ['Firma del chef'],
      img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&q=80',
    },
    {
      name: 'Coulant de chocolate negro 70%',
      desc: 'Centro fundente, helado de vainilla de Madagascar y caramelo de café',
      price: '13€',
      tags: ['Sin gluten'],
      img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&q=80',
    },
    {
      name: 'Crema catalana de azafrán',
      desc: 'Versión clásica con toque de azafrán manchego y frutas de temporada',
      price: '11€',
      tags: ['Sin gluten', 'Clásico'],
      img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&q=80',
    },
    {
      name: 'Selección de quesos artesanos',
      desc: '5 quesos de autor, mermeladas, membrillo y pan de nueces',
      price: '22€',
      tags: ['Para compartir'],
      img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&q=80',
    },
  ],
  vinos: [
    {
      name: 'Vega Sicilia Único 2014',
      desc: 'Ribera del Duero · Tempranillo y Cabernet Sauvignon. Expresión máxima de la bodega',
      price: '480€',
      tags: ['Gran reserva', 'Icónico'],
      img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&q=80',
    },
    {
      name: 'Álvaro Palacios L\'Ermita 2019',
      desc: 'Priorat · Garnacha centenaria. Mineral, complejo y de extraordinaria elegancia',
      price: '390€',
      tags: ['Garnacha', 'Referencia'],
      img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&q=80',
    },
    {
      name: 'Viña Tondonia Blanco Reserva 2012',
      desc: 'Rioja · Viura. Oxidativo y largo. Maridaje perfecto con el rodaballo',
      price: '95€',
      tags: ['Blanco', 'Sommelier recomienda'],
      img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&q=80',
    },
    {
      name: 'Cava Gramona III Lustros 2015',
      desc: 'Penedès · Macabeo y Xarel·lo. 90 meses en rima. Fresco y cremoso',
      price: '110€',
      tags: ['Espumoso', 'Para aperitivo'],
      img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&q=80',
    },
  ],
};

const cartaGrid = document.getElementById('cartaGrid');

function renderCarta(tab) {
  cartaGrid.innerHTML = '';
  menuData[tab].forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'carta-item';
    el.style.animationDelay = `${i * 60}ms`;
    el.innerHTML = `
      <div class="carta-item-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="carta-item-body">
        <div class="carta-item-head">
          <p class="carta-item-name">${item.name}</p>
          <p class="carta-item-price">${item.price}</p>
        </div>
        <p class="carta-item-desc">${item.desc}</p>
        <div class="carta-item-tags">
          ${item.tags.map(t => `<span class="item-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
    cartaGrid.appendChild(el);
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCarta(btn.dataset.tab);
  });
});

renderCarta('entrantes');

/* ── GALERÍA / LIGHTBOX ────────────────────── */
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose   = document.getElementById('lightboxClose');
const lightboxPrev    = document.getElementById('lightboxPrev');
const lightboxNext    = document.getElementById('lightboxNext');

const galeriaItems = document.querySelectorAll('.galeria-item');
let currentLightbox = 0;

function openLightbox(index) {
  currentLightbox = index;
  const item = galeriaItems[index];
  lightboxImg.src     = item.querySelector('img').src;
  lightboxImg.alt     = item.querySelector('img').alt;
  lightboxCaption.textContent = item.querySelector('.galeria-overlay span')?.textContent || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

galeriaItems.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

lightboxPrev.addEventListener('click', () => {
  currentLightbox = (currentLightbox - 1 + galeriaItems.length) % galeriaItems.length;
  openLightbox(currentLightbox);
});
lightboxNext.addEventListener('click', () => {
  currentLightbox = (currentLightbox + 1) % galeriaItems.length;
  openLightbox(currentLightbox);
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   lightboxPrev.click();
  if (e.key === 'ArrowRight')  lightboxNext.click();
});

/* ── OPINIONES SLIDER ──────────────────────── */
const track    = document.getElementById('opinionesTrack');
const cards    = track.querySelectorAll('.opinion-card');
const dotsWrap = document.getElementById('opDots');
let currentOp  = 0;
let autoSlide;

function getVisible() {
  const w = track.parentElement.offsetWidth;
  if (w < 500) return 1;
  if (w < 850) return 2;
  return 3;
}

function buildDots() {
  dotsWrap.innerHTML = '';
  const pages = Math.ceil(cards.length / getVisible());
  for (let i = 0; i < pages; i++) {
    const d = document.createElement('button');
    d.className = 'op-dot' + (i === currentOp ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  }
}

function goTo(index) {
  const vis     = getVisible();
  const pages   = Math.ceil(cards.length / vis);
  currentOp     = Math.max(0, Math.min(index, pages - 1));
  const cardW   = cards[0].offsetWidth + 24;
  track.style.transform = `translateX(-${currentOp * vis * cardW}px)`;
  dotsWrap.querySelectorAll('.op-dot').forEach((d, i) => d.classList.toggle('active', i === currentOp));
}

document.getElementById('opPrev').addEventListener('click', () => { goTo(currentOp - 1); resetAuto(); });
document.getElementById('opNext').addEventListener('click', () => { goTo(currentOp + 1); resetAuto(); });

function startAuto() { autoSlide = setInterval(() => goTo(currentOp + 1 >= Math.ceil(cards.length / getVisible()) ? 0 : currentOp + 1), 5000); }
function resetAuto() { clearInterval(autoSlide); startAuto(); }

buildDots();
startAuto();
window.addEventListener('resize', () => { buildDots(); goTo(0); });

/* ── FORMULARIO DE RESERVAS ────────────────── */
const form = document.getElementById('reservasForm');

const validators = {
  nombre:   v => v.trim().length > 2 ? '' : 'Introduce tu nombre completo.',
  email:    v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Email no válido.',
  telefono: v => /^[\d\s+\-()]{7,}$/.test(v) ? '' : 'Teléfono no válido.',
  personas: v => v ? '' : 'Selecciona el número de personas.',
  fecha:    v => {
    if (!v) return 'Elige una fecha.';
    const chosen = new Date(v);
    const today  = new Date(); today.setHours(0,0,0,0);
    return chosen >= today ? '' : 'La fecha debe ser futura.';
  },
  hora: v => v ? '' : 'Selecciona un turno.',
};

Object.keys(validators).forEach(name => {
  const el = document.getElementById(name);
  if (!el) return;
  el.addEventListener('blur', () => validate(name));
  el.addEventListener('input', () => validate(name));
});

function validate(name) {
  const el  = document.getElementById(name);
  const err = document.getElementById(`err-${name}`);
  if (!el || !err) return true;
  const msg = validators[name](el.value);
  err.textContent = msg;
  el.classList.toggle('error', !!msg);
  return !msg;
}

// Set min date for date input
const dateInput = document.getElementById('fecha');
if (dateInput) {
  const today = new Date();
  const yyyy  = today.getFullYear();
  const mm    = String(today.getMonth() + 1).padStart(2, '0');
  const dd    = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const allValid = Object.keys(validators).map(n => validate(n)).every(Boolean);
  if (!allValid) return;

  const spinner = document.getElementById('btnSpinner');
  const btnText = form.querySelector('.btn-text');
  spinner.classList.add('visible');
  btnText.style.opacity = '0';

  setTimeout(() => {
    spinner.classList.remove('visible');
    btnText.style.opacity = '1';
    document.getElementById('formSuccess').classList.add('visible');
    form.reset();
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  }, 1800);
});

/* ── SCROLL TO TOP ─────────────────────────── */
document.getElementById('scrollTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── ACTIVE NAV LINK on scroll ─────────────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link:not(.nav-cta)');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navAnchors.forEach(a => {
    const href = a.getAttribute('href').replace('#', '');
    a.style.color = href === current ? 'var(--gold)' : '';
  });
}, { passive: true });
