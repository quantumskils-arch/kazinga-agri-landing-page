/* =========================================================
   KAZINGA AGRI — Core interactions
   Central config: update these values in one place.
   ========================================================= */
const KAZINGA = {
  whatsapp: '256700000000',          // demo number — replace with real (no +, no spaces)
  phoneDisplay: '+256 700 000 000',
  email: 'info@kazingaagri.ug',
  donateMsg: 'Hello Kazinga Agri! I would like to make a donation to support your work. Please share payment details (PesaPal / Airtel / MTN).',
};

/* Build a WhatsApp deep link with a pre-filled message */
function waLink(message) {
  return `https://wa.me/${KAZINGA.whatsapp}?text=${encodeURIComponent(message || 'Hello Kazinga Agri!')}`;
}

document.addEventListener('DOMContentLoaded', () => {
  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', () => header.classList.toggle('nav-open'));
    header.querySelectorAll('.nav-links a').forEach(a =>
      a.addEventListener('click', () => header.classList.remove('nav-open'))
    );
  }

  /* ---- Wire up dynamic WhatsApp / donate links ---- */
  document.querySelectorAll('[data-wa]').forEach(el => {
    el.setAttribute('href', waLink(el.getAttribute('data-wa')));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
  document.querySelectorAll('[data-donate]').forEach(el => {
    el.setAttribute('href', waLink(KAZINGA.donateMsg));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  /* ---- Scroll reveal ---- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    reveals.forEach(r => io.observe(r));
  } else {
    reveals.forEach(r => r.classList.add('in'));
  }

  /* ---- Footer year ---- */
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Blog search + category filter ---- */
  const search = document.getElementById('blog-search');
  const chips = document.querySelectorAll('[data-filter]');
  const posts = document.querySelectorAll('[data-post]');
  function applyFilter() {
    const term = (search?.value || '').toLowerCase().trim();
    const active = document.querySelector('[data-filter].active')?.getAttribute('data-filter') || 'all';
    posts.forEach(p => {
      const cat = p.getAttribute('data-cat') || '';
      const text = p.textContent.toLowerCase();
      const matchCat = active === 'all' || cat === active;
      const matchTerm = !term || text.includes(term);
      p.style.display = (matchCat && matchTerm) ? '' : 'none';
    });
  }
  if (search) search.addEventListener('input', applyFilter);
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => x.classList.remove('active'));
    c.classList.add('active');
    applyFilter();
  }));

  /* ---- Contact / training form -> WhatsApp handoff ---- */
  document.querySelectorAll('form[data-wa-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const lines = [];
      for (const [k, v] of d.entries()) { if (v) lines.push(`${k}: ${v}`); }
      const msg = `New enquiry from the Kazinga website:\n\n${lines.join('\n')}`;
      window.open(waLink(msg), '_blank', 'noopener');
    });
  });
});
