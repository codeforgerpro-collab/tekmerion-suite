/* Tekmerion website - small, dependency-free script (CSP: script-src 'self'). © Tekmerion · Built on proof. */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function store(get, k, v) {               // sessionStorage can be missing or blocked: never let it break the page
    try { if (get) return window.sessionStorage.getItem(k); window.sessionStorage.setItem(k, v); } catch (e) { return null; }
    return null;
  }

  // Mobile menu
  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Opening film: once per visit on the home page; "Watch the film" replays it. Enter / Skip / Esc close it.
  var intro = document.querySelector("[data-intro]");
  if (intro) {
    var video = intro.querySelector("video"), timers = [], opener = null;
    var setStep = function (n) { intro.setAttribute("data-step", String(n)); };
    var clear = function () { timers.forEach(clearTimeout); timers = []; };
    var onKey = function (e) { if (e.key === "Escape") { e.preventDefault(); closeIntro(); } };
    var closeIntro = function () {
      clear();
      intro.classList.add("closing");
      document.body.classList.remove("locked");
      store(false, "tk_intro", "1");
      document.removeEventListener("keydown", onKey);
      setTimeout(function () { intro.hidden = true; if (video) { try { video.pause(); } catch (e) {} } }, 650);
      if (opener) { try { opener.focus(); } catch (e) {} opener = null; }
    };
    var openIntro = function (from) {
      clear(); opener = from || null;
      intro.classList.remove("closing"); setStep(0);
      intro.hidden = false;
      document.body.classList.add("locked");
      document.addEventListener("keydown", onKey);
      var enter = intro.querySelector(".btn");
      if (enter) setTimeout(function () { try { enter.focus({ preventScroll: true }); } catch (e) { enter.focus(); } }, 60);
      if (reduce || !video) { setStep(4); timers.push(setTimeout(closeIntro, 9000)); return; }
      try { video.currentTime = 0; } catch (e) {}
      var pr = video.play();
      if (pr && pr.catch) pr.catch(function () { /* autoplay refused: the poster (finished mark) stays on screen */ });
      [[2300, 1], [5200, 2], [8200, 3], [13000, 4]].forEach(function (x) { timers.push(setTimeout(function () { setStep(x[1]); }, x[0])); });
      timers.push(setTimeout(closeIntro, 18500));
    };
    intro.querySelectorAll("[data-intro-close]").forEach(function (b) { b.addEventListener("click", closeIntro); });
    document.querySelectorAll("[data-intro-replay]").forEach(function (b) { b.addEventListener("click", function () { openIntro(b); }); });
    if (!store(true, "tk_intro") && !/[?&]nointro\b/.test(location.search)) openIntro(null);
  }

  // Root page: always open the English edition (Greek is one click away in the top bar)
  if (document.querySelector("[data-root]")) window.location.replace("en/");

  // Category explorer (home): tabs with arrow-key support
  var ex = document.querySelector("[data-explorer]");
  if (ex) {
    var tabs = Array.prototype.slice.call(ex.querySelectorAll("[role=tab]"));
    var show = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        var p = document.getElementById(t.getAttribute("aria-controls"));
        if (p) p.classList.toggle("active", on);
      });
      if (focus) tab.focus();
    };
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { show(t, false); });
      t.addEventListener("keydown", function (e) {
        var j = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") j = (i + 1) % tabs.length;
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") j = (i - 1 + tabs.length) % tabs.length;
        if (e.key === "Home") j = 0;
        if (e.key === "End") j = tabs.length - 1;
        if (j !== null) { e.preventDefault(); show(tabs[j], true); }
      });
    });
    // a link like /en/#explore-energy opens that family
    var m = location.hash.match(/^#explore-([a-z]+)$/);
    if (m) { var t0 = document.getElementById("tab-" + m[1]); if (t0) show(t0, false); }
  }

  // Suite page: filter by family
  var filters = document.querySelectorAll(".filters button");
  if (filters.length) {
    filters.forEach(function (b) {
      b.addEventListener("click", function () {
        var want = b.getAttribute("data-filter");
        filters.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        document.querySelectorAll(".family").forEach(function (f) {
          f.hidden = !(want === "all" || f.getAttribute("data-family") === want);
        });
      });
    });
  }

  // Count-up numbers and scroll reveal (only elements below the fold are hidden first, so nothing flashes)
  var counters = document.querySelectorAll(".count-up");
  var runCount = function (el) {
    if (el.getAttribute("data-done")) return;
    el.setAttribute("data-done", "1");
    var to = +el.getAttribute("data-to"), pre = el.getAttribute("data-pre") || "", suf = el.getAttribute("data-suf") || "";
    var loc = el.getAttribute("data-loc") || "en-GB", t0 = null, dur = 1300;
    if (reduce || !to) return;
    var step = function (ts) {
      if (!t0) t0 = ts;
      var k = Math.min(1, (ts - t0) / dur), v = Math.round(to * (1 - Math.pow(1 - k, 3)));
      el.textContent = pre + v.toLocaleString(loc) + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.remove("pre");
        en.target.querySelectorAll(".count-up").forEach(runCount);
        if (en.target.classList.contains("count-up")) runCount(en.target);
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    var vh = window.innerHeight || 800;
    document.querySelectorAll(".reveal").forEach(function (el, i) {
      if (el.getBoundingClientRect().top > vh * 0.92) {
        el.classList.add("pre");
        el.style.transitionDelay = ((i % 4) * 70) + "ms";
      }
      io.observe(el);
    });
    counters.forEach(function (c) { io.observe(c); });
  }

  // Scroll progress bar and back-to-top
  var sbar = document.querySelector(".sbar"), totop = document.querySelector("[data-totop]"), ticking = false;
  var onScroll = function () {
    ticking = false;
    var h = document.documentElement, max = h.scrollHeight - h.clientHeight, y = window.pageYOffset || h.scrollTop;
    if (sbar) sbar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0) + ")";
    if (totop) totop.hidden = y < 700;
  };
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();
  if (totop) totop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });

  // Product finder (home)
  var finder = document.querySelector("[data-finder]");
  if (finder) {
    var fAud = (finder.querySelector("[data-aud][aria-pressed=true]") || {}).getAttribute ? finder.querySelector("[data-aud][aria-pressed=true]").getAttribute("data-aud") : "";
    var fNeed = "", fCards = finder.querySelectorAll(".fres > [data-fa]"), fCount = finder.querySelector(".fcount"), fNone = finder.querySelector(".fnone");
    var apply = function () {
      var n = 0;
      fCards.forEach(function (c) {
        var ok = (" " + c.getAttribute("data-fa") + " ").indexOf(" " + fAud + " ") >= 0 &&
                 (!fNeed || (" " + c.getAttribute("data-fn") + " ").indexOf(" " + fNeed + " ") >= 0);
        c.hidden = !ok; if (ok) { n++; c.classList.remove("pre"); }
      });
      fCount.textContent = n + " " + fCount.getAttribute(n === 1 ? "data-one" : "data-many");
      fNone.hidden = n > 0;
    };
    finder.querySelectorAll("[data-aud],[data-need]").forEach(function (b) {
      b.addEventListener("click", function () {
        var isAud = b.hasAttribute("data-aud");
        finder.querySelectorAll(isAud ? "[data-aud]" : "[data-need]").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        if (isAud) fAud = b.getAttribute("data-aud"); else fNeed = b.getAttribute("data-need");
        apply();
      });
    });
    apply();
  }

  // Search (Ctrl+K, Cmd+K or "/")
  var sbox = document.querySelector("[data-search]");
  if (sbox) {
    var sin = sbox.querySelector("input"), sres = sbox.querySelector(".search-res"), snone = sbox.querySelector(".search-none");
    var index = null, loading = false, active = 0, lastFocus = null;
    var norm = function (t) { return String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ς/g, "σ"); };
    var draw = function () {
      var q = norm(sin.value).split(/\s+/).filter(Boolean), list = [];
      (index || []).forEach(function (it, i) {
        var score = 0, ok = q.every(function (tok) {
          if (it._t.indexOf(tok) >= 0) { score += it._t.indexOf(tok) === 0 ? 6 : 4; return true; }
          if (it._d.indexOf(tok) >= 0) { score += 2; return true; }
          if (it._x.indexOf(tok) >= 0) { score += 1; return true; }
          return false;
        });
        if (ok) list.push([score, -i, it]);
      });
      list.sort(function (a, b) { return b[0] - a[0] || b[1] - a[1]; });
      list = list.slice(0, 8);
      sres.textContent = "";
      active = 0;
      list.forEach(function (row, i) {
        var it = row[2], li = document.createElement("li"), a = document.createElement("a"), k = document.createElement("span"), b = document.createElement("b"), d = document.createElement("span");
        li.setAttribute("role", "option"); if (i === 0) li.className = "on";
        a.href = it.u; k.className = "sk" + (it.c ? " cat-" + it.c : ""); k.textContent = it.k; b.textContent = it.t; d.className = "sd"; d.textContent = it.d;
        a.appendChild(k); a.appendChild(b); a.appendChild(d); li.appendChild(a); sres.appendChild(li);
      });
      snone.hidden = !index || list.length > 0;
    };
    var openSearch = function () {
      lastFocus = document.activeElement;
      sbox.hidden = false; document.body.classList.add("locked"); sin.value = ""; sin.focus();
      if (index) { draw(); return; }
      if (loading) return;
      loading = true;
      fetch(sbox.getAttribute("data-index"), { credentials: "same-origin" }).then(function (r) { return r.json(); }).then(function (j) {
        index = j.map(function (it) { it._t = norm(it.t); it._d = norm(it.d + " " + it.k); it._x = norm(it.x); return it; });
        draw();
      }).catch(function () { index = []; draw(); });
    };
    var closeSearch = function () { sbox.hidden = true; document.body.classList.remove("locked"); if (lastFocus && lastFocus.focus) lastFocus.focus(); };
    document.querySelectorAll("[data-search-open]").forEach(function (b) { b.addEventListener("click", openSearch); });
    sbox.addEventListener("click", function (e) { if (e.target === sbox) closeSearch(); });
    sin.addEventListener("input", draw);
    sin.addEventListener("keydown", function (e) {
      var items = sres.children;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault(); if (!items.length) return;
        items[active].className = ""; active = (active + (e.key === "ArrowDown" ? 1 : items.length - 1)) % items.length;
        items[active].className = "on"; items[active].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter" && items[active]) { e.preventDefault(); window.location.href = items[active].firstChild.href; }
    });
    document.addEventListener("keydown", function (e) {
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || "");
      if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) { e.preventDefault(); if (sbox.hidden) openSearch(); else closeSearch(); }
      else if (e.key === "/" && !typing && sbox.hidden && !(intro && !intro.hidden)) { e.preventDefault(); openSearch(); }
      else if (e.key === "Escape" && !sbox.hidden) closeSearch();
    });
  }

  // Contact form: POST JSON to /api/lead (local server or the live Cloudflare function); fallback is email
  var form = document.getElementById("lead-form");
  if (form) {
    var ok = document.getElementById("form-ok"), err = document.getElementById("form-err"), inv = document.getElementById("form-invalid"), mailMsg = document.getElementById("form-mail");
    var byMail = function (data) {                      // static hosting: hand the request to the visitor's own email app
      var to = form.getAttribute("data-mail");
      if (!to) { err.hidden = false; err.focus(); return; }
      var lines = ["name", "email", "organisation", "role", "segment", "product"].map(function (k) { return k + ": " + (data[k] || "-"); });
      lines.push("", data.message || "");
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(form.getAttribute("data-subject") + " - " + (data.organisation || data.name)) +
        "&body=" + encodeURIComponent(lines.join("\n"));
      if (mailMsg) { mailMsg.hidden = false; mailMsg.focus(); }
    };
    var submit = form.querySelector("button[type=submit]"), label = submit ? submit.textContent : "";
    var p = new URLSearchParams(window.location.search).get("product");
    if (p) { var sel = form.querySelector("[name=product]"); if (sel && sel.querySelector('option[value="' + p.replace(/[^a-z0-9-]/g, "") + '"]')) sel.value = p; }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      ok.hidden = true; err.hidden = true; inv.hidden = true; if (mailMsg) mailMsg.hidden = true;
      if (!form.checkValidity()) { inv.hidden = false; form.reportValidity(); return; }
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = typeof v === "string" ? v.trim() : v; });
      data.consent = !!form.querySelector("[name=consent]").checked;
      data.page = window.location.pathname;
      submit.disabled = true; submit.textContent = submit.getAttribute("data-sending") || "…";
      fetch(form.getAttribute("data-api") || "/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), credentials: "same-origin" })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, status: r.status, j: j }; }); })
        .then(function (res) {
          if (res.ok && res.j && res.j.ok) { form.reset(); ok.hidden = false; ok.focus(); }
          else if (res.status === 404 || res.status === 405) byMail(data);
          else { err.hidden = false; err.focus(); }
        })
        .catch(function () { byMail(data); })
        .then(function () { submit.disabled = false; submit.textContent = label; });
    });
  }
})();
