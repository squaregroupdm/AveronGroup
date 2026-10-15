(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FADE = reduce ? 0 : 220;

  // Navigation: a rule appears once the page has scrolled; the phone menu toggles
  var nav = document.getElementById('nav');
  function setNav() { nav.classList.toggle('is-solid', (window.scrollY || 0) > 8); }
  if (nav) { setNav(); window.addEventListener('scroll', setNav, { passive: true }); }
  var menu = nav && nav.querySelector('.menu');
  if (menu) {
    menu.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.textContent = open ? 'Close' : 'Menu';
    });
    nav.querySelectorAll('.links a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Menu'; });
    });
  }

  // Current section in the navigation
  var navLinks = nav ? [].slice.call(nav.querySelectorAll('.links a[href^="#"]')) : [];
  var sections = navLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    var cur = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var link = navLinks.filter(function (a) { return a.getAttribute('href') === '#' + e.target.id; })[0];
        if (!link) return;
        if (e.isIntersecting) { navLinks.forEach(function (a) { a.removeAttribute('aria-current'); }); link.setAttribute('aria-current', 'true'); }
        else if (link.hasAttribute('aria-current')) link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (s) { cur.observe(s); });
  }

  // Reveal on scroll, once; nothing stays hidden if the observer never fires
  var items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('is-in'); }); }
  setTimeout(function () { items.forEach(function (el) { el.classList.add('is-in'); }); }, 5000);

  // A crossfading photograph: two stacked images, the second fades in over the first
  function crossfader(a, b) {
    var front = a, back = b, busy = false;
    return function (src, alt) {
      if (front.getAttribute('src') === src) return;
      if (busy) { front.src = src; front.alt = alt; return; }
      busy = true;
      back.src = src; back.alt = alt; back.removeAttribute('aria-hidden');
      var done = function () {
        back.classList.add('is-on');
        setTimeout(function () {
          front.src = src; front.alt = alt; front.srcset = ''; front.sizes = '';
          back.classList.remove('is-on'); back.setAttribute('aria-hidden', 'true');
          busy = false;
        }, FADE + 60);
      };
      if (back.complete) done(); else back.onload = done;
    };
  }
  function swapText(el, fn) {
    el.classList.add('is-out');
    setTimeout(function () { fn(); el.classList.remove('is-out'); }, FADE);
  }
  function tabs(list, onSelect) {
    var btns = [].slice.call(list.querySelectorAll('[role="tab"]'));
    function select(i, focus) {
      btns.forEach(function (b, k) { b.setAttribute('aria-selected', k === i ? 'true' : 'false'); b.tabIndex = k === i ? 0 : -1; });
      if (focus) btns[i].focus();
      onSelect(i);
    }
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { select(i); });
      b.addEventListener('mouseenter', function () { if (window.matchMedia('(hover: hover)').matches) select(i); });
      b.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (i + 1) % btns.length;
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (i - 1 + btns.length) % btns.length;
        if (e.key === 'Home') n = 0; if (e.key === 'End') n = btns.length - 1;
        if (n !== null) { e.preventDefault(); select(n, true); }
      });
    });
    btns.forEach(function (b, k) { b.tabIndex = k === 0 ? 0 : -1; });
  }

  // Capabilities
  var caps = [
    { h: 'Global Sourcing', p: 'Factory selection matched to the product, the volume and the finish, from a nominated network of partner factories in Bangladesh.', img: 'cap-sourcing', alt: 'Two factory staff comparing a board sample against a specification sheet', items: ['Capability matching', 'Costing and quotation', 'Sample coordination'] },
    { h: 'Development', p: 'Structure, dielines, material selection and pre-production samples, agreed with you before an order is placed.', img: 'cap-development', alt: 'A sample cutting table in a packaging development room', items: ['Dielines and structure', 'Material selection', 'Pre-production samples'] },
    { h: 'Manufacturing Management', p: 'Production scheduling, progress reporting and on-site coordination across printing, finishing and converting.', img: 'cap-manufacturing', alt: 'An operator checking sheets at the delivery end of a press line', items: ['Production scheduling', 'Progress reporting', 'On-site coordination'] },
    { h: 'Quality Assurance', p: 'Checks agreed before production and carried out pre-production, in line and at final inspection, with AQL sampling where agreed.', img: 'gal-inspect', alt: 'An inspector checking a printed colour bar through a loupe', items: ['Pre-production checks', 'In-line inspection', 'Final inspection and AQL'] },
    { h: 'Compliance', p: 'Coordination of the documentation, testing and standards a destination market requires, verified per project with the partner factory.', img: 'journey-verify', alt: 'A technician measuring a carton sample on a laboratory bench', items: ['Material declarations', 'Testing coordination', 'Factory documentation'] },
    { h: 'Freight & Logistics', p: 'Freight booking, export documentation and delivery to the destination, with one point of contact until stock is received.', img: 'cap-freight', alt: 'Stacked shipping containers in a port yard at dusk', items: ['Freight booking', 'Export documentation', 'Destination delivery'] }
  ];
  var capList = document.querySelector('.caps .list');
  if (capList) {
    var capFade = crossfader(document.getElementById('cap-img-a'), document.getElementById('cap-img-b'));
    var capText = document.getElementById('cap-text'), capPanel = document.getElementById('cap-panel');
    tabs(capList, function (i) {
      var c = caps[i];
      capFade('assets/photo/m/' + c.img + '.jpg', c.alt);
      capPanel.setAttribute('aria-labelledby', 'cap-tab-' + i);
      swapText(capText, function () {
        document.getElementById('cap-h').textContent = c.h;
        document.getElementById('cap-p').textContent = c.p;
        var ul = document.getElementById('cap-list'); ul.innerHTML = '';
        c.items.forEach(function (t) { var li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
      });
    });
  }

  // Process stages
  var stages = [
    { h: 'Brief', p: 'You send the specification, quantity, destination and date, or as much of it as you know. We reply with the questions a quotation needs.', m: 'A confirmed brief', img: 'journey-brief', alt: 'A dieline drawing, a carton blank and a fan of board swatches on a desk' },
    { h: 'Source', p: 'The product is matched to the factory in the network with the right press, finishing and capacity, and quoted on landed value.', m: 'A route and a quotation', img: 'journey-source', alt: 'Two managers walking a factory floor with a folder of samples' },
    { h: 'Develop', p: 'Structure, dieline, material and finish are developed and sampled before anything is ordered.', m: 'An approved sample', img: 'journey-develop', alt: 'A hand cutting a white carton sample on a drawing board' },
    { h: 'Approve', p: 'Colour references, artwork proofs and the sample are signed off, and the quality plan is agreed with you and the factory.', m: 'A signed specification', img: 'cap-quality', alt: 'A printed proof inspected under a loupe at a viewing booth' },
    { h: 'Produce', p: 'Printing, finishing and converting run to the plan, with progress reported and checks carried out in line.', m: 'Inspected stock', img: 'journey-produce', alt: 'A press operator checking a printed sheet beside the press' },
    { h: 'Deliver', p: 'Packing, export documentation and freight are coordinated to the destination, and the file stays open until stock is received.', m: 'Stock received', img: 'journey-deliver', alt: 'Pallets of cartons being loaded into a container at a loading bay' }
  ];
  var stageList = document.querySelector('.process .stages');
  if (stageList) {
    var stFade = crossfader(document.getElementById('st-img-a'), document.getElementById('st-img-b'));
    var stText = document.getElementById('st-text'), line = stageList.querySelector('.line');
    tabs(stageList, function (i) {
      var s = stages[i];
      stFade('assets/photo/m/' + s.img + '.jpg', s.alt);
      if (line) line.style.transform = 'translateY(' + (i * 100) + '%)';
      swapText(stText, function () {
        document.getElementById('st-h').textContent = s.h;
        document.getElementById('st-p').textContent = s.p;
        document.getElementById('st-m').textContent = s.m;
      });
    });
  }

  // Materials
  var mats = [
    { h: 'Folding box board', r: 'FBB, SBS, C1S and C2S, 230 to 400 gsm', items: ['Good print surface', 'Strong folding characteristics', 'Suitable for premium retail cartons'], img: 'gal-material', alt: 'Pallets of folding box board stacked on a factory floor' },
    { h: 'Corrugated board', r: 'E, B and BC flute, single and double wall', items: ['Shipping and e-commerce strength', 'Litho-laminated or direct printed', 'Kraft or white liners'], img: 'sust-kraft', alt: 'The cut edge of a corrugated sheet in close-up' },
    { h: 'Spot UV', r: 'Gloss or textured UV over matt lamination', items: ['Contrast on matt surfaces', 'Registered to logos, lines and panels', 'Suited to FBB and laminated board'], img: 'gal-inspect', alt: 'A printed and varnished sheet inspected under a loupe' },
    { h: 'Hot and cold foil', r: 'Metallic and pigment foils', items: ['Hot stamped or cold transfer', 'Registered to print and emboss', 'Logos, lines and panels'], img: 'macro-foil', alt: 'A foiled line across a navy textured board in close-up' },
    { h: 'Emboss and deboss', r: 'Blind, registered or combined with foil', items: ['Raised or recessed detail', 'Combined with foil in one pass', 'Suited to FBB and wrapped board'], img: 'gal-finish', alt: 'A hot foil roll running over a navy carton blank on a stamping unit' },
    { h: 'Coatings', r: 'Aqueous, UV, matt, gloss and soft touch', items: ['Protects print and colour', 'Matt, gloss and soft-touch finishes', 'Food-contact grades confirmed before quotation'], img: 'gal-print', alt: 'Coating cylinders on a sheetfed press' }
  ];
  var matList = document.querySelector('.mats .cats');
  if (matList) {
    var matFade = crossfader(document.getElementById('mat-img-a'), document.getElementById('mat-img-b'));
    var matText = document.getElementById('mat-text');
    tabs(matList, function (i) {
      var m = mats[i];
      matFade('assets/photo/m/' + m.img + '.jpg', m.alt);
      swapText(matText, function () {
        document.getElementById('mat-h').textContent = m.h;
        document.getElementById('mat-r').textContent = m.r;
        var ul = document.getElementById('mat-list'); ul.innerHTML = '';
        m.items.forEach(function (t) { var li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
      });
    });
  }

  // Landed value: tap toggles on touch screens
  document.querySelectorAll('.sum .h').forEach(function (f) {
    f.addEventListener('click', function () {
      var open = f.classList.contains('is-open');
      document.querySelectorAll('.sum .f.is-open').forEach(function (x) { x.classList.remove('is-open'); });
      if (!open) f.classList.add('is-open');
    });
  });

  // Route plot draws itself once seen
  var route = document.getElementById('routepath');
  if (route && !reduce && 'IntersectionObserver' in window) {
    var len = route.getTotalLength();
    route.style.strokeDasharray = len; route.style.strokeDashoffset = len; route.style.transition = 'stroke-dashoffset 1400ms cubic-bezier(0.22,1,0.36,1)';
    var branches = route.parentNode.querySelector('.branches');
    if (branches) { branches.style.opacity = 0; branches.style.transition = 'opacity 600ms ease 1100ms'; }
    var ro = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { route.style.strokeDashoffset = 0; if (branches) branches.style.opacity = 0.7; ro.disconnect(); } }, { threshold: 0.05 });
    ro.observe(route);
  }
})();
