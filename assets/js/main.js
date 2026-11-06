/* Bİ’ — ortak veri, üst menü, alt bilgi ve sayfa çizicileri (taslak) */

const LOREM = {
  s: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  m: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  l: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  xl: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nulla gravida orci a odio."
};

const GROUPS = [
  { id: 1, name: "Yaratıcılık & Deneyim", services: ["deneyim", "event", "egitim"] },
  { id: 2, name: "Strateji & Gelişim", services: ["proje", "strateji", "iletisim"] },
  { id: 3, name: "İş Birliği & Etki", services: ["organizasyon", "isbirligi", "etki", "topluluk"] }
];

const SERVICES = {
  deneyim:      { name: "Deneyim",      group: 1, scope: "Deneyim tasarımı, konsept geliştirme.", formats: ["fikir"] },
  event:        { name: "Event",        group: 1, scope: "Etkinlik tasarımı ve yönetimi." },
  egitim:       { name: "Eğitim",       group: 1, scope: "Eğitim, atölye ve kapasite geliştirme.", formats: ["atolye"] },
  proje:        { name: "Proje",        group: 2, scope: "Proje geliştirme, hibe ve fon yönetimi.", formats: ["fikir"] },
  strateji:     { name: "Strateji",     group: 2, scope: "Stratejik planlama ve danışmanlık.", formats: ["fikir"] },
  iletisim:     { name: "İletişim",     group: 2, scope: "Kurumsal iletişim, PR ve marka yönetimi." },
  organizasyon: { name: "Organizasyon", group: 3, scope: "Organizasyon ve operasyon yönetimi." },
  isbirligi:    { name: "İş Birliği",   group: 3, scope: "Kurumsal ilişkiler, ortaklıklar ve paydaş yönetimi." },
  etki:         { name: "Etki",         group: 3, scope: "Sosyal etki, sürdürülebilirlik ve etki yönetimi." },
  topluluk:     { name: "Topluluk",     group: 3, scope: "Gönüllülük, topluluk ve ağ yönetimi." }
};

const FORMATS = {
  atolye: { name: "Atölye", text: "Bİ’ EĞİTİM çatısı altında eğitim, kolaylaştırıcılık ve uygulamalı workshop formatı." },
  fikir:  { name: "Fikir",  text: "Bİ’ DENEYİM, Bİ’ PROJE ve Bİ’ STRATEJİ çalışmalarında konsept ve yaratıcı fikir geliştirme başlığı." }
};

const PROJECTS = [
  { id: "proje-01", img: 195, title: "Lorem Ipsum Festivali",   service: "event",     year: "2025", tone: 1, client: "Kurum Adı" },
  { id: "proje-02", img: 163, title: "Dolor Sit Deneyim Alanı", service: "deneyim",   year: "2025", tone: 3, client: "Marka Adı" },
  { id: "proje-03", img: 180, title: "Amet Hibe Programı",       service: "proje",     year: "2024", tone: 2, client: "Vakıf Adı" },
  { id: "proje-04", img: 192, title: "Consectetur Atölyeleri",   service: "egitim",    year: "2024", tone: 5, client: "Belediye Adı" },
  { id: "proje-05", img: 182, title: "Adipiscing Etki Raporu",   service: "etki",      year: "2024", tone: 6, client: "Şirket Adı" },
  { id: "proje-06", img: 129, title: "Elit Topluluk Ağı",        service: "topluluk",  year: "2023", tone: 4, client: "Dernek Adı" }
];

const pic = (id, w = 900, h = 1125) => `--img:url(https://picsum.photos/id/${id}/${w}/${h})`;
const ARROW = '<span class="arr" aria-hidden="true">→</span>';
const sig = (cls = "") => `<span class="sig ${cls}" aria-hidden="true"></span>`;
const mark = (name) => `<span class="mark">${sig()}<span class="mark__name">${name}</span></span>`;
const upper = (s) => s.toLocaleUpperCase("tr-TR");
const svcName = (key) => "Bİ’ " + upper(SERVICES[key].name);
const svcUrl = (key) => `hizmet.html?s=${key}`;
const projUrl = (id) => `proje.html?p=${id}`;

/* ---------- Üst menü & alt bilgi ---------- */
function renderChrome() {
  const page = document.body.dataset.page || "";
  const nav = [
    ["hakkimda", "Hakkımda", "hakkimda.html"],
    ["hizmetler", "Hizmet Alanları", "hizmetler.html"],
    ["projeler", "Projeler", "projeler.html"],
    ["yaklasim", "Yaklaşım", "yaklasim.html"]
  ];
  const header = document.getElementById("site-header");
  if (header) {
    header.outerHTML = `
    <header class="header">
      <div class="wrap header__in">
        <a href="index.html" class="brand" aria-label="Ana sayfa">
          ${sig()}
          <span class="brand__txt">BEGÜM İNTEPELER<small>DANIŞMANLIK</small></span>
        </a>
        <nav class="nav" id="nav">
          ${nav.map(([k, t, h]) => `<a href="${h}" class="${page === k ? "is-active" : ""}">${t}</a>`).join("")}
          <a href="iletisim.html" class="btn ${page === "iletisim" ? "btn--fill" : ""}">İletişim ${ARROW}</a>
        </nav>
        <button class="burger" aria-label="Menü" aria-controls="nav"><span></span><span></span></button>
      </div>
    </header>`;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.outerHTML = `
    <footer class="footer">
      <div class="wrap">
        <div class="footer__top">
          <div>
            <a href="iletisim.html" class="btn">Bİ’ konuşalım ${ARROW}</a>
          </div>
          <div class="footer__cols">
            ${GROUPS.map(g => `
              <div>
                <h5>${g.name}</h5>
                <ul>${g.services.map(s => `<li><a href="${svcUrl(s)}">${svcName(s)}</a></li>`).join("")}</ul>
              </div>`).join("")}
            <div>
              <h5>İletişim</h5>
              <ul>
                <li><a href="mailto:merhaba@ornek.com">merhaba@ornek.com</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <span>© ${new Date().getFullYear()} BEGÜM İNTEPELER DANIŞMANLIK</span>
          <span>Lorem ipsum · İstanbul</span>
        </div>
      </div>
    </footer>
    ${page !== "iletisim" ? `<a href="iletisim.html" class="fab">İletişim ${ARROW}</a>` : ""}
    <span class="draft-badge">Taslak</span>`;
  }

  const hdr = document.querySelector(".header");
  document.querySelector(".burger")?.addEventListener("click", () => document.body.classList.toggle("menu-open"));
  const onScroll = () => hdr?.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Ortak parçalar ---------- */
function groupsHTML() {
  return `<div class="groups">${GROUPS.map(g => `
    <div class="group reveal" data-group="${g.id}">
      <div class="group__no">0${g.id}</div>
      <div class="group__title">${g.name}</div>
      <ul class="group__list">
        ${g.services.map(s => `
          <li><a class="svc-link" href="${svcUrl(s)}">
            ${mark(upper(SERVICES[s].name))}
            ${ARROW}
            <p>${SERVICES[s].scope}</p>
          </a></li>`).join("")}
      </ul>
    </div>`).join("")}</div>`;
}

function workCard(p, i = 0) {
  const s = SERVICES[p.service];
  return `
  <a class="work reveal" href="${projUrl(p.id)}" data-service="${p.service}" style="transition-delay:${(i % 3) * 80}ms">
    <div class="ph tone-${p.tone}" data-label="Fotoğraf" style="${pic(p.img)}"></div>
    <div class="work__meta"><span>${svcName(p.service)}</span><span>${p.year}</span></div>
    <h3 class="work__title">${p.title}</h3>
    <p class="work__desc">${LOREM.s}</p>
  </a>`;
}

function stepsHTML() {
  const steps = [
    ["Fikir", LOREM.m],
    ["Planlama", LOREM.m],
    ["Uygulama", LOREM.m],
    ["Etki", LOREM.m]
  ];
  return `<div class="steps">${steps.map(([t, d], i) => `
    <div class="step reveal" style="transition-delay:${i * 90}ms">
      <div class="step__no">0${i + 1}</div>
      <h3>${t}</h3>
      <p>${d}</p>
    </div>`).join("")}</div>`;
}

function fill(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

/* ---------- Sayfa çizicileri ---------- */
const PAGES = {
  home() {
    fill("home-groups", groupsHTML());
    fill("home-works", PROJECTS.slice(0, 4).map(workCard).join(""));
    fill("home-steps", stepsHTML());
  },

  hizmetler() {
    fill("all-services", GROUPS.map(g => `
      <section class="section ${g.id === 2 ? "section--sand" : ""}" data-group="${g.id}">
        <div class="wrap">
          <div class="split">
            <div class="reveal">
              <div class="group__no">0${g.id}</div>
              <h2 class="h2" style="margin-top:14px">${g.name}</h2>
              <p class="muted" style="margin-top:20px;max-width:34ch">${LOREM.m}</p>
            </div>
            <ul class="list-lines">
              ${g.services.map((s, i) => `
                <li class="reveal">
                  <span class="n">0${i + 1}</span>
                  <a href="${svcUrl(s)}" class="svc-link" style="padding:0">
                    ${mark(upper(SERVICES[s].name))} ${ARROW}
                    <p style="margin-top:8px">${SERVICES[s].scope} ${LOREM.s}</p>
                  </a>
                </li>`).join("")}
            </ul>
          </div>
        </div>
      </section>`).join(""));
  },

  hizmet() {
    const key = new URLSearchParams(location.search).get("s");
    const s = SERVICES[key] || SERVICES.deneyim;
    const k = SERVICES[key] ? key : "deneyim";
    const g = GROUPS.find(x => x.id === s.group);
    document.title = `${svcName(k)} — Begüm İntepeler Danışmanlık`;
    document.querySelectorAll("[data-group]").forEach(el => el.dataset.group = s.group);
    document.body.dataset.group = s.group;

    fill("svc-hero", `
      <div class="wrap">
        <div class="crumbs"><a href="hizmetler.html">Hizmet Alanları</a> / ${g.name}</div>
        <div class="fade-up">${mark(upper(s.name))}</div>
        <p class="scope">${s.scope}</p>
        <p class="lead muted" style="max-width:32ch;margin-top:28px">${LOREM.m}</p>
      </div>`);

    fill("svc-body", `
      <div class="split">
        <div class="reveal"><span class="eyebrow">Kapsam</span><h2 class="h2" style="margin-top:18px">Neler yapıyoruz?</h2></div>
        <div>
          <p class="lead reveal">${LOREM.l}</p>
          <ul class="list-lines" style="margin-top:48px">
            ${["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed", "Eiusmod tempor"].map((t, i) => `
              <li class="reveal"><span class="n">0${i + 1}</span><div><h4>${t}</h4><p>${LOREM.m}</p></div></li>`).join("")}
          </ul>
        </div>
      </div>`);

    const fm = (s.formats || []).map(f => `
      <div class="format-card reveal">${mark(upper(FORMATS[f].name))}<p>${FORMATS[f].text} ${LOREM.s}</p></div>`).join("");
    fill("svc-formats", fm ? `
      <div class="split" style="margin-top:clamp(72px,10vw,120px)">
        <div class="reveal"><span class="eyebrow">Format</span><h2 class="h2" style="margin-top:18px">Çalışma formatları</h2></div>
        <div style="display:grid;gap:16px">${fm}</div>
      </div>` : "");

    const rel = PROJECTS.filter(p => p.service === k);
    const list = (rel.length ? rel : PROJECTS).slice(0, 2);
    fill("svc-works", list.map(workCard).join(""));

    fill("svc-sibs", g.services.filter(x => x !== k).map(x => `<a class="sib" href="${svcUrl(x)}">${mark(upper(SERVICES[x].name))}</a>`).join(""));
    fill("svc-group-name", g.name);
  },

  projeler() {
    const used = [...new Set(PROJECTS.map(p => p.service))];
    fill("filters", `<button class="chip is-on" data-f="*">Tümü</button>` +
      used.map(s => `<button class="chip" data-f="${s}">${svcName(s)}</button>`).join(""));
    fill("all-works", PROJECTS.map(workCard).join(""));
    document.getElementById("filters").addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      document.querySelectorAll(".chip").forEach(c => c.classList.toggle("is-on", c === b));
      document.querySelectorAll("#all-works .work").forEach(w => {
        w.style.display = (b.dataset.f === "*" || w.dataset.service === b.dataset.f) ? "" : "none";
      });
    });
  },

  proje() {
    const id = new URLSearchParams(location.search).get("p");
    const idx = Math.max(0, PROJECTS.findIndex(p => p.id === id));
    const p = PROJECTS[idx];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const s = SERVICES[p.service];
    document.title = `${p.title} — Bİ’`;
    document.body.dataset.group = s.group;

    fill("proj-hero", `
      <div class="crumbs"><a href="projeler.html">Projeler</a> / ${svcName(p.service)}</div>
      <h1 class="display fade-up" style="margin:22px 0 0;max-width:16ch">${p.title}</h1>
      <dl class="facts">
        <div><dt>Hizmet</dt><dd><a href="${svcUrl(p.service)}">${svcName(p.service)}</a></dd></div>
        <div><dt>Yıl</dt><dd>${p.year}</dd></div>
        <div><dt>İş birliği</dt><dd>${p.client}</dd></div>
        <div><dt>Konum</dt><dd>Lorem, İstanbul</dd></div>
      </dl>`);
    fill("proj-cover", `<div class="ph ph--wide tone-${p.tone}" data-label="Kapak fotoğrafı" style="${pic(p.img, 1800, 1013)}"></div>`);

    const flow = [["İhtiyaç", LOREM.l], ["Yaklaşım", LOREM.l + " " + LOREM.s], ["Uygulama", LOREM.l], ["Sonuç", LOREM.m]];
    fill("proj-flow", flow.map(([t, d], i) => `
      <div class="flow__item reveal">
        <div class="flow__label"><span class="n">0${i + 1}</span><h3>${t}</h3></div>
        <div>
          <p class="lead">${d}</p>
          ${i === 2 ? `<div class="gallery" style="margin-top:40px">
              <div class="ph ph--wide tone-${p.tone}" data-label="Fotoğraf" style="${pic(7, 1400, 788)}"></div>
              <div class="ph ph--sq tone-5" data-label="Fotoğraf" style="${pic(20, 700, 700)}"></div>
              <div class="ph ph--sq tone-${(p.tone % 6) + 1}" data-label="Fotoğraf" style="${pic(42, 700, 700)}"></div>
            </div>` : ""}
          ${i === 3 ? `<div class="results">
              <div><strong>00+</strong><span>Lorem ipsum katılımcı</span></div>
              <div><strong>00</strong><span>Dolor sit paydaş</span></div>
              <div><strong>%00</strong><span>Amet memnuniyet</span></div>
            </div>` : ""}
        </div>
      </div>`).join(""));

    fill("proj-next", `
      <a class="next-proj" href="${projUrl(next.id)}">
        <div><span class="eyebrow">Sonraki proje</span><h3 style="margin-top:14px">${next.title}</h3></div>
        <span class="btn">Gör ${ARROW}</span>
      </a>`);
  },

  yaklasim() {
    fill("yaklasim-steps", stepsHTML());
    fill("yaklasim-detail", ["Fikir", "Planlama", "Uygulama", "Etki"].map((t, i) => `
      <div class="flow__item reveal">
        <div class="flow__label"><span class="n">0${i + 1}</span><h3>${t}</h3></div>
        <div>
          <p class="lead">${LOREM.m}</p>
          <p class="muted">${LOREM.xl}</p>
          <ul class="pill-list" style="margin-top:20px">${["Lorem", "Ipsum dolor", "Sit amet", "Consectetur"].map(x => `<li>${x}</li>`).join("")}</ul>
        </div>
      </div>`).join(""));
  },

  iletisim() {
    const sel = document.getElementById("f-service");
    if (sel) sel.innerHTML = `<option value="">Seçiniz</option>` + GROUPS.map(g =>
      `<optgroup label="${g.name}">${g.services.map(s => `<option>${svcName(s)}</option>`).join("")}</optgroup>`).join("") +
      `<option>Henüz emin değilim</option>`;
    const pre = new URLSearchParams(location.search).get("s");
    if (pre && SERVICES[pre]) sel.value = svcName(pre);
    document.getElementById("contact-form")?.addEventListener("submit", e => {
      e.preventDefault();
      document.getElementById("form-note").textContent = "Taslak: form henüz bir yere gönderilmiyor.";
    });
  }
};

/* ---------- Belirme animasyonu ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("is-in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(e => io.observe(e));
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  const fn = PAGES[document.body.dataset.render];
  if (fn) fn();
  initReveal();
});
