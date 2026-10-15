(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);
  var EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

  // Navigation: the pill turns more opaque once scrolled; the overlay menu opens on the phone
  var nav = document.getElementById('nav');
  var overlay = document.getElementById('overlay');
  function setNav() { if (nav) nav.classList.toggle('is-solid', (window.scrollY || 0) > 40); }
  setNav(); window.addEventListener('scroll', setNav, { passive: true });
  var burger = nav && nav.querySelector('.burger');
  if (burger && overlay) {
    function setOpen(open) {
      nav.classList.toggle('is-open', open); overlay.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false'); overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';
    }
    burger.addEventListener('click', function () { setOpen(!nav.classList.contains('is-open')); });
    overlay.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) setOpen(false); });
  }

  // Reveal on scroll, once; nothing stays hidden if the observer never fires
  var items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('is-in'); }); }
  setTimeout(function () { items.forEach(function (el) { el.classList.add('is-in'); }); }, 5000);

  // Shared helpers
  function crossfader(front, back) {
    var busy = false;
    return function (src, alt) {
      if (!front || !back || front.currentSrc === src || front.getAttribute('src') === src) return;
      if (busy) { front.src = src; front.alt = alt; return; }
      busy = true;
      back.src = src; back.alt = alt;
      var done = function () {
        back.classList.add('is-on');
        setTimeout(function () {
          front.src = src; front.alt = alt; front.removeAttribute('srcset'); front.removeAttribute('sizes');
          var pic = front.parentElement; if (pic && pic.tagName === 'PICTURE') { var s = pic.querySelector('source'); if (s) s.remove(); }
          back.classList.remove('is-on'); busy = false;
        }, reduce ? 0 : 960);
      };
      if (back.complete && back.naturalWidth) done(); else back.onload = done;
    };
  }
  function swapText(el, fn) {
    if (!el) { fn(); return; }
    el.classList.add('is-out');
    setTimeout(function () { fn(); el.classList.remove('is-out'); }, reduce ? 0 : 220);
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
      b.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (i + 1) % btns.length;
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (i - 1 + btns.length) % btns.length;
        if (e.key === 'Home') n = 0; if (e.key === 'End') n = btns.length - 1;
        if (n !== null) { e.preventDefault(); select(n, true); }
      });
    });
    btns.forEach(function (b, k) { b.tabIndex = k === 0 ? 0 : -1; });
    return select;
  }

  // Chapter 03: material selector
  var mats = [
    { h: 'Folding box board', r: 'FBB, SBS, C1S, C2S · 230 to 400 gsm', items: ['Printability and finishing compatibility', 'Strong folding characteristics', 'Retail, beauty, food and healthcare cartons'], img: 'mat-fbb', alt: 'Fanned sheets of white folding box board' },
    { h: 'Corrugated board', r: 'E, B and BC flute · single and double wall · kraft or white liners', items: ['Shipping, master and e-commerce cartons', 'Litho-laminated or direct printed', 'Retail-ready packaging, displays and inserts'], img: 'mat-corrugated', alt: 'A stack of layered corrugated board sheets' },
    { h: 'Rigid greyboard', r: '1.5 to 3 mm · paper or cloth wrapped', items: ['Two-piece, magnetic, drawer and book-style boxes', 'Wrapped in printed or textured paper', 'Premium, gift and presentation packaging'], img: 'prod-greyboard', alt: 'The corner of a greyboard rigid box' },
    { h: 'Hot and cold foil', r: 'Metallic and pigment foils, hot stamped or cold transfer', items: ['Registered to print and emboss', 'Logos, lines and panels', 'Combined with textured effects'], img: 'mat-foil', alt: 'Gold foil numerals on black textured board' },
    { h: 'Emboss and deboss', r: 'Blind, registered or combined with foil', items: ['Raised or recessed detail', 'Textured effects on board or wrapped paper', 'One pass with foil where the design allows'], img: 'mat-emboss', alt: 'An embossed dot pattern on white card' },
    { h: 'Coatings and spot UV', r: 'Aqueous gloss and matt, UV, spot UV, protective coatings', items: ['Protects print and colour', 'Spot UV for contrast on matt', 'Food-contact grades confirmed before quotation'], img: 'cat-healthcare', alt: 'Plain white coated cartons on a grey surface' }
  ];
  var matList = document.querySelector('.material .cats');
  var matSelect = null;
  if (matList) {
    var matFront = document.querySelector('.material .view .ph picture img') || document.querySelector('.material .view .ph img');
    var matFade = crossfader(matFront, document.getElementById('mat-img-b'));
    var matSpec = document.getElementById('mat-spec');
    matSelect = tabs(matList, function (i) {
      var m = mats[i];
      matFade('assets/photo/m/' + m.img + '.jpg', m.alt);
      swapText(matSpec, function () {
        document.getElementById('mat-h').textContent = m.h;
        document.getElementById('mat-r').textContent = m.r;
        var ul = document.getElementById('mat-list'); ul.innerHTML = '';
        m.items.forEach(function (t) { var li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
      });
    });
  }

  // Chapter 06: one carton becomes a shipment, three frames in sequence
  var seq = document.querySelectorAll('#pack-seq figure');
  if (seq.length) {
    if (!reduce && 'IntersectionObserver' in window) {
      var so = new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting) return; so.disconnect();
        seq.forEach(function (f, k) { setTimeout(function () { f.classList.add('is-on'); }, 120 + k * 260); });
      }, { threshold: 0.3 });
      so.observe(seq[0].parentElement);
    } else { seq.forEach(function (f) { f.classList.add('is-on'); }); }
    setTimeout(function () { seq.forEach(function (f) { f.classList.add('is-on'); }); }, 6000);
  }

  // Chapter 05: gates approve as they come into view
  var gates = document.querySelectorAll('.gate');
  if (gates.length) {
    if (!reduce && 'IntersectionObserver' in window) {
      var go = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { var g = e.target; setTimeout(function () { g.classList.add('is-ok'); }, 160 + [].indexOf.call(gates, g) * 140); go.unobserve(g); } });
      }, { rootMargin: '0px 0px -20% 0px', threshold: 0.5 });
      gates.forEach(function (g) { go.observe(g); });
    } else { gates.forEach(function (g) { g.classList.add('is-ok'); }); }
    setTimeout(function () { gates.forEach(function (g) { g.classList.add('is-ok'); }); }, 7000);
  }

  // Brief page: prefill from the homepage mini form
  if (location.search && document.getElementById('stepper')) {
    var q = new URLSearchParams(location.search);
    var fam = q.get('family'); if (fam) { var r = document.querySelector('input[name="family"][value="' + fam.replace(/"/g, '') + '"]'); if (r) r.checked = true; }
    var prod = q.get('product'); if (prod) { var pi = document.getElementById('product'); if (pi) pi.value = prod; }
  }

  // The journey: rail, route line, pinned chapters, route plot, orbit
  var journey = document.querySelector('main.journey');
  if (!journey) return;
  var chapters = [].slice.call(journey.querySelectorAll('.ch'));
  var rail = document.getElementById('rail'), railN = document.getElementById('rail-n'), railT = document.getElementById('rail-t');
  var bar = document.querySelector('.progressbar i');
  var ink = document.getElementById('route-ink');
  var routeTotal = journey.offsetHeight;

  function setChapter(ch) {
    if (railN) railN.textContent = ch.dataset.ch;
    if (railT) railT.textContent = ch.dataset.title;
    var light = ch.classList.contains('on-ivory') || ch.classList.contains('on-light');
    if (rail) rail.classList.toggle('on-light-ground', light);
    chapters.forEach(function (c) { c.classList.toggle('is-reached', c.offsetTop <= ch.offsetTop); });
  }

  if (hasGsap && !reduce) {
    // Rail visibility and chapter tracking
    ScrollTrigger.create({ trigger: journey, start: 'top top-=200', end: 'bottom bottom', onToggle: function (s) { if (rail) rail.classList.toggle('is-on', s.isActive); } });
    // Route origin: the line starts under the opening's primary button and elbows into the margin rail
    var acts = document.querySelector('.open .acts');
    var elbow = document.getElementById('route-elbow');
    function placeRoute() {
      if (!acts) return;
      var top = acts.getBoundingClientRect().bottom + window.scrollY - journey.getBoundingClientRect().top - window.scrollY + 22;
      journey.style.setProperty('--route-top', top + 'px');
    }
    placeRoute(); window.addEventListener('resize', placeRoute);
    if (elbow) setTimeout(function () { elbow.classList.add('is-on'); }, 600);
    // Route line and progress bar follow the scroll through the journey
    ScrollTrigger.create({ trigger: journey, start: 'top top', end: 'bottom bottom', scrub: 0.4, onUpdate: function (s) {
      if (ink) ink.style.transform = 'scaleY(' + s.progress + ')';
      if (bar) bar.style.transform = 'scaleX(' + s.progress + ')';
    } });
    // Chapter 01: fields appear as the brief is read
    var labels = document.querySelectorAll('#brief-labels .tag');
    if (labels.length) {
      gsap.set(labels, { opacity: 0, y: 10 });
      ScrollTrigger.create({ trigger: '#brief', start: 'top 60%', once: true, onEnter: function () { gsap.to(labels, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' }); } });
    }
    // Chapter 02: factory holds for a beat while capability labels appear
    var caps = document.querySelectorAll('#source-caps .tag');
    if (caps.length) {
      gsap.set(caps, { opacity: 0, y: 14 });
      ScrollTrigger.create({ trigger: '#source-stage', start: 'top top', end: '+=60%', pin: true, pinSpacing: true, anticipatePin: 1,
        onEnter: function () { gsap.to(caps, { opacity: 1, y: 0, duration: 0.7, stagger: 0.14, ease: 'power3.out' }); },
        onEnterBack: function () { gsap.to(caps, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }); } });
    }
    // Chapter 03: the material selector holds while the scroll steps through the six materials
    var matSel = document.getElementById('mat-sel');
    var matBlock = matSel && matSel.parentElement;
    if (matSel && matSelect && window.innerWidth >= 1024) {
      var matCount = mats.length, matIdx = 0;
      var wholeFits = matBlock.offsetHeight < window.innerHeight - 110;
      ScrollTrigger.create({ trigger: wholeFits ? matBlock : matSel, start: wholeFits ? 'top 90px' : 'center center', end: '+=' + (matCount * 45) + '%', pin: true, anticipatePin: 1, scrub: 0.2, onUpdate: function (s) {
        var idx = Math.min(matCount - 1, Math.floor(s.progress * matCount));
        if (idx !== matIdx) { matIdx = idx; matSelect(idx); }
      } });
    }
    // Chapter 04: three production stages replace one another over two viewports
    var frames = document.querySelectorAll('#make-frames img');
    var steps = document.querySelectorAll('#make-steps .step');
    var counter = document.getElementById('make-counter');
    if (frames.length === 3) {
      ScrollTrigger.create({ trigger: '#make-pin', start: 'top top', end: '+=200%', pin: true, anticipatePin: 1, scrub: 0.3, onUpdate: function (s) {
        var p = s.progress * 3; var idx = Math.min(2, Math.floor(p)); var local = p - idx;
        frames.forEach(function (f, k) { f.style.opacity = k === idx ? 1 : (k === idx + 1 ? Math.max(0, (local - 0.75) * 4) : 0); });
        steps.forEach(function (st, k) { st.classList.toggle('is-on', k === idx); var line = st.querySelector('.line i'); if (line) line.style.transform = 'scaleX(' + (k < idx ? 1 : k === idx ? local : 0) + ')'; });
        if (counter) counter.lastChild.textContent = 'Stage ' + (idx + 1) + ' of 3';
      } });
    }
    // Chapter 07: the route draws as the map is read
    var route = document.getElementById('routepath');
    if (route) {
      var len = route.getTotalLength();
      route.style.strokeDasharray = len; route.style.strokeDashoffset = len;
      var branches = route.parentNode.querySelector('.branches'); if (branches) branches.style.opacity = 0;
      ScrollTrigger.create({ trigger: route.closest('.map'), start: 'top 80%', end: 'bottom 55%', scrub: 0.5, onUpdate: function (s) {
        route.style.strokeDashoffset = len * (1 - s.progress);
        if (branches) branches.style.opacity = s.progress > 0.9 ? 0.7 * ((s.progress - 0.9) / 0.1) : 0;
      } });
    }
    // Chapter tracking is created after the pins so the pin spacing is already in the layout
    chapters.forEach(function (ch) {
      ScrollTrigger.create({ trigger: ch, start: 'top 55%', end: 'bottom 55%', refreshPriority: -1, onEnter: function () { setChapter(ch); }, onEnterBack: function () { setChapter(ch); } });
    });
    // Chapter 08: the route resolves into the orbit
    var orbit = document.getElementById('orbit-path');
    if (orbit) {
      ScrollTrigger.create({ trigger: '#deliver', start: 'top 60%', once: true, onEnter: function () { gsap.to(orbit, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }); } });
    }
    window.addEventListener('load', function () { placeRoute(); ScrollTrigger.refresh(); });
  } else {
    // No GSAP or reduced motion: everything visible, chapter tracking by observer only
    if (rail) rail.classList.add('is-on');
    if (ink) ink.style.transform = 'none';
    if (bar) bar.style.transform = 'none';
    document.querySelectorAll('#make-frames img').forEach(function (f, k) { f.style.opacity = k === 0 ? 1 : 0; });
    var orbitP = document.getElementById('orbit-path'); if (orbitP) orbitP.style.strokeDashoffset = 0;
    var rp = document.getElementById('routepath'); if (rp) rp.style.strokeDashoffset = 0;
    if ('IntersectionObserver' in window) {
      var co = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) setChapter(e.target); }); }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
      chapters.forEach(function (c) { co.observe(c); });
    }
  }
})();
