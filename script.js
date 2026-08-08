// ============ COLORS (hardcoded for canvas — Chart.js can't read CSS vars) ============
const INK = "#1B2A3D";
const AMBER = "#E8A33D";
const AMBER_DEEP = "#B97A1F";
const FOG = "#9B9890";
const LINE = "#DCD6C6";

// ============ PERSONA CARDS ============
function renderPersonas() {
  const wrap = document.getElementById("personaCards");
  const grid = document.createElement("div");
  grid.className = "persona-grid";
  PERSONAS.forEach(p => {
    const card = document.createElement("div");
    card.className = "persona-card";
    card.innerHTML = `
      <p class="persona-age">${p.age}</p>
      <p class="persona-name">${p.name}</p>
      <p class="persona-row"><span>Motivation —</span> ${p.motivation}</p>
      <p class="persona-row"><span>Needs —</span> ${p.need}</p>
    `;
    grid.appendChild(card);
  });
  wrap.appendChild(grid);
}

// ============ ANALOGY VAULT ============
function renderVault() {
  const wrap = document.getElementById("vaultEntries");
  VAULT.forEach(v => {
    const entry = document.createElement("div");
    entry.className = "vault-entry";
    entry.innerHTML = `
      <div class="vault-headword">${v.term}</div>
      <div class="vault-analogy">"${v.analogy}"</div>
      <div class="vault-value">${v.value}</div>
    `;
    wrap.appendChild(entry);
  });
}

// ============ SEQUENCE DIAGRAM ============
function renderSequence() {
  const wrap = document.getElementById("sequenceDiagram");
  const row = document.createElement("div");
  row.className = "seq-row";
  SEQUENCE.forEach((s, i) => {
    const step = document.createElement("div");
    step.className = "seq-step";
    step.innerHTML = `
      <span class="seq-step-num">${s.num}</span>
      <p class="seq-step-title">${s.title}</p>
      <p class="seq-step-desc">${s.desc}</p>
    `;
    row.appendChild(step);
    if (i < SEQUENCE.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "seq-connector";
      arrow.textContent = "→";
      row.appendChild(arrow);
    }
  });
  wrap.appendChild(row);

  const demo = document.createElement("div");
  demo.className = "seq-demo";
  demo.innerHTML = `
    <span class="seq-demo-badge">3:00–6:00</span>
    <p class="seq-demo-text">The real-world demo block — a screen recording proving the tool works in a human context, preventing the bounce rate that purely theoretical content invites.</p>
  `;
  wrap.appendChild(demo);
}

// ============ PILLAR GRID ============
function renderPillars() {
  const wrap = document.getElementById("pillarGrid");
  PILLARS.forEach(p => {
    const card = document.createElement("div");
    card.className = "pillar-card";
    card.innerHTML = `
      <span class="pillar-num">${p.num}</span>
      <p class="pillar-title">${p.title}</p>
      <p class="pillar-desc">${p.desc}</p>
    `;
    wrap.appendChild(card);
  });
}

// ============ RETENTION ASSETS ============
function renderRetention() {
  const wrap = document.getElementById("retentionAssets");
  RETENTION_ASSETS.forEach(r => {
    const card = document.createElement("div");
    card.className = "retention-card";
    card.innerHTML = `
      <p class="retention-title">${r.title}</p>
      <p class="retention-desc">${r.desc}</p>
    `;
    wrap.appendChild(card);
  });
}

// ============ TIMELINE ============
function renderTimeline() {
  const wrap = document.getElementById("timeline");
  TIMELINE.forEach(t => {
    const item = document.createElement("div");
    item.className = "tl-item";
    item.innerHTML = `
      <span class="tl-dot"></span>
      <p class="tl-week">${t.week}</p>
      <p class="tl-title">${t.title}</p>
      <p class="tl-pillar">${t.pillar}</p>
    `;
    wrap.appendChild(item);
  });
}

// ============ KPI CARDS ============
function renderKPIs() {
  const wrap = document.getElementById("kpiCards");
  KPIS.forEach(k => {
    const card = document.createElement("div");
    card.className = "kpi-card";
    card.innerHTML = `
      <span class="kpi-target">${k.target}</span>
      <p class="kpi-name">${k.name}</p>
      <p class="kpi-sub">${k.sub}</p>
    `;
    wrap.appendChild(card);
  });
}

// ============ DEMAND CHART (growth %, mixed with one volume callout) ============
function renderDemandChart() {
  const ctx = document.getElementById("demandChart");
  const growthLabels = ["\"AI Explained\" content (Tubular)", "\"LLM explained non-technical\"", "\"RAG AI simple\""];
  const growthValues = [340, 210, 180];

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: growthLabels,
      datasets: [{
        label: "YoY growth",
        data: growthValues,
        backgroundColor: AMBER,
        borderRadius: 4,
        barThickness: 48
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (c) => "+" + c.parsed.y + "% year over year" } }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { callback: (v) => "+" + v + "%", color: FOG, font: { family: "Inter", size: 11 } },
          grid: { color: LINE }
        },
        x: {
          ticks: { color: INK, font: { family: "Inter", size: 11 } },
          grid: { display: false }
        }
      }
    }
  });
}

// ============ CADENCE CHART (horizontal) ============
function renderCadenceChart() {
  const ctx = document.getElementById("cadenceChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: CADENCE.map(c => c.platform),
      datasets: [{
        label: "Posts per week",
        data: CADENCE.map(c => c.value),
        backgroundColor: [AMBER, AMBER_DEEP, FOG, INK],
        borderRadius: 4,
        barThickness: 28
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (c) => CADENCE[c.dataIndex].unit
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: { stepSize: 1, color: FOG, font: { family: "Inter", size: 11 } },
          grid: { color: LINE }
        },
        y: {
          ticks: { color: INK, font: { family: "Inter", size: 12 } },
          grid: { display: false }
        }
      }
    }
  });
}

// ============ INIT ============
document.addEventListener("DOMContentLoaded", () => {
  renderPersonas();
  renderVault();
  renderSequence();
  renderPillars();
  renderRetention();
  renderTimeline();
  renderKPIs();
  renderDemandChart();
  renderCadenceChart();
});
