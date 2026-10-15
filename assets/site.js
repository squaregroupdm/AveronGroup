(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Navigation: transparent over the masthead, solid once scrolled; ink colour follows the ground beneath it
  var nav = document.getElementById('nav');
  var masthead = document.querySelector('.masthead');
  function setNav() {
    var y = window.scrollY || 0;
    var h = masthead ? masthead.offsetHeight : 0;
    nav.classList.toggle('is-solid', y > 24);
    nav.classList.toggle('on-paper', masthead ? y > h - 72 : true);
  }
  if (nav) { setNav(); window.addEventListener('scroll', setNav, { passive: true }); }
  var menu = nav && nav.querySelector('.menu');
  if (menu) {
    menu.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.textContent = open ? 'Close' : 'Menu';
    });
    nav.querySelectorAll('.links a').forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Menu'; }); });
  }

  // Reveal on scroll, once; nothing stays hidden if the observer never fires
  var items = document.querySelectorAll('[data-reveal]');
  var watched = document.querySelectorAll('[data-watch]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
    watched.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('is-in'); }); watched.forEach(function (el) { el.classList.add('is-in'); }); }
  setTimeout(function () { items.forEach(function (el) { el.classList.add('is-in'); }); }, 6000);

  // Supply journey: the pinned photograph follows the stage in view
  var stages = document.querySelectorAll('.journey .stage');
  var pins = document.querySelectorAll('.journey .pin img');
  var which = document.getElementById('which');
  if (stages.length && 'IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var key = e.target.dataset.stage;
        pins.forEach(function (img) { img.classList.toggle('is-on', img.dataset.stage === key); });
        if (which) which.textContent = e.target.querySelector('h3').textContent;
      });
    }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });
    stages.forEach(function (s) { so.observe(s); });
  }

  // Explorer: the live thing
  var cats = {
    folding: { title: 'Folding cartons', desc: 'Mono, straight-line, auto-lock and window cartons on FBB and SBS, with offset print and the finishing the brand calls for.', img: 'assets/photo/cat-folding.jpg', alt: 'Plain navy folding cartons on a sample-room table', items: ['Mono cartons', 'Straight-line cartons', 'Auto-lock and crash-lock cartons', 'Window cartons', 'Sleeves', 'Product and retail cartons'] },
    premium: { title: 'Premium packaging', desc: 'Rigid, two-piece, magnetic, drawer and book-style boxes on wrapped greyboard, with foil, emboss and spot UV where the brief asks.', img: 'assets/photo/cat-premium.jpg', alt: 'A navy cloth-wrapped rigid box open on linen', items: ['Rigid boxes', 'Two-piece boxes', 'Magnetic boxes', 'Drawer boxes', 'Book-style boxes', 'Gift and presentation boxes'] },
    corrugated: { title: 'Corrugated', desc: 'Shipping cartons, e-commerce mailers, retail-ready and die-cut packaging on E, B and BC flute, litho-laminated or direct printed.', img: 'assets/photo/cat-corrugated.jpg', alt: 'A stack of kraft e-commerce mailer boxes', items: ['Shipping and master cartons', 'E-commerce boxes', 'Retail-ready packaging', 'Die-cut cartons', 'Displays and inserts'] },
    retail: { title: 'Retail', desc: 'Shoe boxes, product boxes, paper bags, hangtags, labels and product cards, specified to the retailer’s requirements.', img: 'assets/photo/cat-retail.jpg', alt: 'A plain ivory shoe box, a kraft bag and blank hangtags', items: ['Shoe boxes', 'Product boxes', 'Paper bags', 'Hangtags and labels', 'Product cards', 'Promotional packaging'] },
    food: { title: 'Food', desc: 'Food cartons, pizza, ice-cream, chocolate, bakery and takeaway packaging on food-contact grades, confirmed before quotation.', img: 'assets/photo/cat-food.jpg', alt: 'Plain kraft and white bakery cartons on a steel counter', items: ['Food cartons', 'Pizza boxes', 'Ice-cream boxes', 'Chocolate boxes', 'Bakery packaging', 'Takeaway packaging'] },
    healthcare: { title: 'Healthcare', desc: 'Pharmaceutical folding cartons, secondary packaging, inserts and printed components, subject to the applicable requirements.', img: 'assets/photo/cat-healthcare.jpg', alt: 'Plain white pharmaceutical cartons on a laboratory bench', items: ['Folding cartons', 'Secondary packaging', 'Product boxes', 'Inserts', 'Printed components'] }
  };
  var tabs = document.querySelectorAll('.explore [role="tab"]');
  var exPic = document.getElementById('ex-pic'), exH = document.getElementById('ex-h'), exD = document.getElementById('ex-desc'), exItems = document.getElementById('ex-items'), exMore = document.getElementById('ex-more');
  function fill(key) {
    var c = cats[key]; if (!c) return;
    exItems.innerHTML = '';
    c.items.forEach(function (t) { var li = document.createElement('li'); li.textContent = t; exItems.appendChild(li); });
  }
  if (tabs.length) {
    fill('folding');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        var key = t.dataset.cat, c = cats[key];
        tabs.forEach(function (x) { x.setAttribute('aria-selected', x === t ? 'true' : 'false'); });
        exPic.classList.add('is-out');
        setTimeout(function () { exPic.src = c.img; exPic.alt = c.alt; exPic.classList.remove('is-out'); }, reduce ? 0 : 240);
        exH.textContent = c.title; exD.textContent = c.desc; fill(key);
      });
    });
    exMore.addEventListener('click', function () {
      var open = exItems.classList.toggle('is-open');
      exMore.setAttribute('aria-expanded', open ? 'true' : 'false');
      exMore.textContent = open ? 'Close category' : 'Explore category';
    });
  }

  // Macro moment: the photograph moves a few percent with the scroll
  var macro = document.getElementById('macro-img');
  if (macro && !reduce) {
    var sec = macro.parentElement;
    function park() {
      var r = sec.getBoundingClientRect(); var vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return;
      var p = (vh - r.top) / (vh + r.height);
      macro.style.transform = 'scale(' + (1.04 + p * 0.04).toFixed(3) + ') translateY(' + ((p - 0.5) * -4).toFixed(2) + '%)';
    }
    park(); window.addEventListener('scroll', park, { passive: true });
  }

  // Drag to scroll on the horizontal rows
  document.querySelectorAll('[data-drag]').forEach(function (row) {
    var down = false, x0 = 0, s0 = 0;
    row.addEventListener('pointerdown', function (e) { down = true; x0 = e.clientX; s0 = row.scrollLeft; row.style.cursor = 'grabbing'; });
    window.addEventListener('pointerup', function () { down = false; row.style.cursor = ''; });
    row.addEventListener('pointermove', function (e) { if (!down) return; row.scrollLeft = s0 - (e.clientX - x0); });
    row.addEventListener('wheel', function (e) { if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && row.scrollWidth > row.clientWidth) { row.scrollLeft += e.deltaY; e.preventDefault(); } }, { passive: false });
  });

  // Route plot draws itself once seen
  var route = document.getElementById('routepath');
  if (route && !reduce && 'IntersectionObserver' in window) {
    var len = route.getTotalLength();
    route.style.strokeDasharray = len; route.style.strokeDashoffset = len; route.style.transition = 'stroke-dashoffset 1600ms cubic-bezier(0.22,1,0.36,1)';
    var ro = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { route.style.strokeDashoffset = 0; ro.disconnect(); } }, { threshold: 0.4 });
    ro.observe(route);
  }
})();
