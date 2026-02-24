<!-- src/views/ResumePage.vue -->
<template>
  <main id="resume" aria-label="Resume">

    <!-- ═══════════════════════════════════════
         HEADER BANNER
    ═══════════════════════════════════════ -->
    <section class="r-header" ref="headerEl" @mousemove="onMouseMove">
      <div class="rh-dot-field" aria-hidden="true"></div>
      <div class="rh-orb rh-orb-a" aria-hidden="true"></div>
      <div class="rh-orb rh-orb-b" aria-hidden="true"></div>
      <div class="rh-spotlight" ref="spotlight" aria-hidden="true"></div>

      <div class="rh-inner">

        <!-- LEFT: name + ticker -->
        <div class="rh-left">
          <div class="rh-name-row">
            <span
              class="rh-char"
              v-for="(ch, i) in nameChars"
              :key="i"
              :style="{ animationDelay: i * 0.036 + 's' }"
              :class="{ 'rh-space': ch === ' ' }"
              v-html="ch === ' ' ? '&nbsp;' : ch"
            ></span>
          </div>
          <!-- ticker sits directly below name -->
          <div class="rh-ticker-wrap">
            <span class="rh-sep" aria-hidden="true"></span>
            <div class="rh-ticker" ref="tickerEl">
              <span class="tick-item">Frontend Developer</span>
              <span class="tick-item">UI/UX Designer</span>
            </div>
          </div>
        </div>

        <!-- RIGHT: stats on top, actions on bottom -->
        <div class="rh-right">
          <div class="rh-stats">
            <div class="rh-stat" v-for="s in stats" :key="s.label">
              <span class="rh-stat-n">{{ s.num }}</span>
              <span class="rh-stat-l">{{ s.label }}</span>
            </div>
          </div>

          <div class="rh-actions">
            <span class="avail-tag">
              <span class="avail-dot"></span>
              Available for work
            </span>
            <a href="/assets/resume.pdf" download class="dl-btn"
              @mouseenter="dlActive = true" @mouseleave="dlActive = false">
              <span class="dl-fill" :class="{ active: dlActive }"></span>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2v9M8 11L5 8M8 11l3-3M2 14h12"
                  stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
              </svg>
              <span class="dl-text">Download Resume</span>
            </a>
          </div>
        </div>

      </div>

    </section>

    <!-- ═══════════════════════════════════════
         BODY GRID
    ═══════════════════════════════════════ -->
    <section class="r-body">

      <!-- LEFT COLUMN -->
      <div class="r-col r-col-left">

        <!-- EDUCATION -->
        <div class="r-block" ref="blockEdu">
          <div class="r-block-head">
            <span class="r-block-num">01</span>
            <h2 class="r-block-title">Education</h2>
            <div class="r-block-rule"></div>
          </div>

          <div class="edu-list">
            <div
              class="edu-row"
              v-for="(e, i) in education"
              :key="e.year"
              @mouseenter="hovEdu = i"
              @mouseleave="hovEdu = null"
              :class="{ active: hovEdu === i }"
            >
              <div class="edu-marker">
                <span class="edu-dot"></span>
                <span class="edu-track" v-if="i < education.length - 1"></span>
              </div>
              <div class="edu-content">
                <div class="edu-meta">
                  <span class="edu-year">{{ e.year }}</span>
                  <span class="edu-school">{{ e.school }}</span>
                </div>
                <p class="edu-degree">{{ e.degree }}</p>
                <div class="edu-honors" v-if="e.honors?.length">
                  <span class="honor-chip" v-for="h in e.honors" :key="h">
                    <svg width="7" height="7" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
                      <path d="M4 0L4.85 2.87L7.61 2.19L5.8 4.38L7.61 5.81L4.85 5.13L4 8L3.15 5.13L0.39 5.81L2.2 4.38L0.39 2.19L3.15 2.87Z"/>
                    </svg>
                    {{ h }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- EXPERIENCE -->
        <div class="r-block r-block--exp" ref="blockExp">
          <div class="r-block-head">
            <span class="r-block-num">02</span>
            <h2 class="r-block-title">Experience</h2>
            <div class="r-block-rule"></div>
          </div>

          <div class="exp-card" v-for="exp in experience" :key="exp.role">
            <div class="exp-top-row">
              <div class="exp-title-group">
                <span class="exp-year">{{ exp.year }}</span>
                <h3 class="exp-role">{{ exp.role }}</h3>
              </div>
              <div class="exp-live">
                <span class="pulse-dot"></span>
                <span class="pulse-label">Active</span>
              </div>
            </div>
            <p class="exp-desc">{{ exp.desc }}</p>
            <div class="exp-chips">
              <span class="chip" v-for="sk in exp.skills" :key="sk">{{ sk }}</span>
            </div>
          </div>
        </div>

      </div>

      <!-- RIGHT COLUMN -->
      <div class="r-col r-col-right">

        <!-- CERTIFICATIONS -->
        <div class="r-block r-block--certs" ref="blockCerts">
          <div class="r-block-head">
            <span class="r-block-num">03</span>
            <h2 class="r-block-title">Certifications</h2>
            <div class="r-block-rule"></div>
          </div>

          <div class="cert-grid">
            <div
              class="cert-card"
              v-for="(c, i) in certs"
              :key="c.name"
              :style="{ '--ci': i }"
              @mouseenter="hovCert = i"
              @mouseleave="hovCert = null"
              :class="{ active: hovCert === i }"
            >
              <!-- top row: index + check -->
              <div class="cc-top">
                <span class="cc-idx">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="cc-check" :class="{ lit: hovCert === i }">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
              <!-- org -->
              <span class="cc-org">{{ c.org }}</span>
              <!-- name -->
              <p class="cc-name">{{ c.name }}</p>
              <!-- fill bar -->
              <div class="cc-bar">
                <div class="cc-bar-fill" :class="{ grow: hovCert === i }"></div>
              </div>
              <!-- hover glow -->
              <div class="cc-glow"></div>
            </div>
          </div>

        </div>
      </div>

    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const headerEl  = ref(null)
const spotlight = ref(null)
const tickerEl  = ref(null)
const blockEdu  = ref(null)
const blockExp  = ref(null)
const blockCerts = ref(null)
const dlActive  = ref(false)
const hovEdu    = ref(null)
const hovCert   = ref(null)

const nameChars = 'Maxene Quiambao'.split('')

const stats = [
  { num: '4+', label: 'Projects' },
  { num: '6+', label: 'Certs' },
  { num: '2+', label: 'Yrs' },
]

const education = [
  {
    year: '2023 – 2027',
    degree: 'BS Information Technology – Web Development',
    school: 'Holy Angel University',
    honors: ["Dean's Lister", "President's Lister"],
  },
  {
    year: '2021 – 2023',
    degree: 'Senior High School – STEM',
    school: 'Concepcion Catholic School',
    honors: ['With High Honors'],
  },
]

const experience = [
  {
    year: '2023 — Present',
    role: 'Frontend Developer & UI/UX Designer',
    desc: 'Crafting responsive, user-centered digital experiences from concept to deployment — obsessed with the intersection of beautiful design and clean, performant code.',
    skills: ['Vue.js', 'Tailwind CSS', 'Figma', 'JavaScript', 'Responsive Design'],
  },
]

const certs = [
  { org: 'freeCodeCamp',    name: 'Responsive Web Design' },
  { org: 'HubSpot Academy', name: 'Digital Marketing' },
  { org: 'Cisco',           name: 'JavaScript Essentials 1' },
  { org: 'Simplilearn',     name: 'Introduction to Graphic Design' },
  { org: 'Simplilearn',     name: 'Website UI/UX Designing' },
  { org: 'Simplilearn',     name: 'Introduction to PHP' },
]

/* mouse spotlight */
function onMouseMove(e) {
  const sp = spotlight.value
  const el = headerEl.value
  if (!sp || !el) return
  const rect = el.getBoundingClientRect()
  sp.style.transform = `translate(${e.clientX - rect.left - 280}px, ${e.clientY - rect.top - 280}px)`
}

/* ticker */
function initTicker() {
  const el = tickerEl.value
  if (!el) return
  const items = el.querySelectorAll('.tick-item')
  let cur = 0
  items.forEach((it, i) => {
    it.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(.22,.68,0,1.2)'
    it.style.opacity   = i === 0 ? '1' : '0'
    it.style.transform = i === 0 ? 'translateY(0)' : 'translateY(14px)'
  })
  setInterval(() => {
    items[cur].style.opacity   = '0'
    items[cur].style.transform = 'translateY(-14px)'
    cur = (cur + 1) % items.length
    items[cur].style.opacity   = '1'
    items[cur].style.transform = 'translateY(0)'
  }, 2800)
}

/* scroll reveal */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed')
        io.unobserve(e.target)
      }
    })
  }, { threshold: 0.08 })
  ;[blockEdu, blockExp, blockCerts].forEach(r => r.value && io.observe(r.value))
}

onMounted(() => { initTicker(); initReveal() })
</script>

<style scoped>
/* ══════════════════════════════════════
   ROOT
══════════════════════════════════════ */
#resume {
  background: var(--warm-white);
  min-height: 100vh;
}

/* ══════════════════════════════════════
   HEADER
══════════════════════════════════════ */
.r-header {
  background: var(--charcoal);
  /* padding-top accounts for fixed nav height (~68px) + desired spacing */
  padding: 108px 80px 64px;
  position: relative;
  overflow: hidden;
}

/* diagonal dot field — distinct from homepage */
.rh-dot-field {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(245,235,208,0.07) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom right, black 0%, transparent 60%);
  -webkit-mask-image: linear-gradient(to bottom right, black 0%, transparent 60%);
  pointer-events: none;
}

/* orbs */
.rh-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: orbFloat 10s ease-in-out infinite alternate;
}
.rh-orb-a {
  width: 380px; height: 380px;
  top: -130px; right: -80px;
  background: radial-gradient(circle, rgba(127,1,31,0.3) 0%, transparent 70%);
  animation-duration: 9s;
}
.rh-orb-b {
  width: 240px; height: 240px;
  bottom: -90px; left: 36%;
  background: radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%);
  animation-duration: 13s;
  animation-delay: -5s;
}
@keyframes orbFloat {
  from { transform: scale(1) translateY(0); }
  to   { transform: scale(1.08) translateY(-18px); }
}

/* mouse-follow spotlight */
.rh-spotlight {
  position: absolute;
  width: 560px; height: 560px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, rgba(127,1,31,0.06) 40%, transparent 70%);
  pointer-events: none;
  z-index: 0;
  will-change: transform;
  transition: transform 0.1s linear;
}

.rh-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

/* LEFT */
.rh-left { flex: 1; min-width: 0; }

.rh-name-row {
  display: flex;
  flex-wrap: wrap;
  line-height: 0.9;
  margin-bottom: 0;
}

.rh-char {
  font-family: var(--font-upright);
  font-size: clamp(44px, 6.5vw, 88px);
  font-weight: 300;
  color: var(--cream);
  display: inline-block;
  opacity: 0;
  transform: translateY(28px);
  animation: rhCharIn 0.55s cubic-bezier(.22,.68,0,1.2) forwards;
  will-change: transform, opacity;
}
.rh-space { width: 0.25em; }
@keyframes rhCharIn {
  to { opacity: 1; transform: translateY(0); }
}

/* ticker — directly below name */
.rh-ticker-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 14px;
}

.rh-sep {
  display: block;
  width: 24px; height: 1px;
  background: rgba(201,168,76,0.5);
  flex-shrink: 0;
}

.rh-ticker {
  position: relative;
  height: 22px;
  min-width: 220px;
  overflow: hidden;
}

.tick-item {
  position: absolute;
  top: 0; left: 0;
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(201,168,76,0.85);
  white-space: nowrap;
  will-change: transform, opacity;
  line-height: 22px;
}

/* RIGHT */
.rh-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  flex-shrink: 0;
  align-self: stretch;
}

.rh-stats {
  display: flex;
  gap: 28px;
  align-items: flex-start;
}

.rh-stat {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.rh-stat-n {
  font-family: var(--font-upright);
  font-size: 30px;
  font-weight: 300;
  line-height: 1;
  color: var(--cream);
  letter-spacing: -0.02em;
}

.rh-stat-l {
  font-family: var(--font-sans);
  font-size: 7px;
  font-weight: 300;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(245,235,208,0.28);
}

/* actions — always at bottom of rh-right */
.rh-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: nowrap;
}

.avail-tag {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-sans);
  font-size: 7px;
  font-weight: 300;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(245,235,208,0.6);
  border: 1px solid rgba(245,235,208,0.14);
  padding: 8px 14px;
  border-radius: 100px;
  white-space: nowrap;
}

.avail-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 6px rgba(74,222,128,0.8);
  flex-shrink: 0;
  animation: availPulse 2s ease-in-out infinite;
}
@keyframes availPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.55; transform: scale(1.4); }
}

.dl-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  text-decoration: none;
  color: var(--cream);
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 12px 22px;
  border: 1px solid rgba(245,235,208,0.2);
  border-radius: 3px;
  overflow: hidden;
  transition: border-color 0.3s;
  white-space: nowrap;
}

.dl-fill {
  position: absolute; inset: 0;
  background: var(--crimson);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.38s cubic-bezier(.22,.68,0,1.2);
  z-index: 0;
}
.dl-fill.active { transform: scaleX(1); transform-origin: left; }
.dl-btn:hover { border-color: var(--crimson); }
.dl-btn svg, .dl-text { position: relative; z-index: 1; }

/* ══════════════════════════════════════
   BODY GRID
══════════════════════════════════════ */
.r-body {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  background: var(--warm-white);
}

.r-col { padding: 56px 64px 64px; }

.r-col-left {
  border-right: 1px solid rgba(127,1,31,0.08);
}

.r-col-right {
  background: rgba(127,1,31,0.018);
}

/* ── BLOCK BASE ── */
.r-block {
  margin-bottom: 52px;
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 0.65s cubic-bezier(.22,.68,0,1.2),
    transform 0.65s cubic-bezier(.22,.68,0,1.2);
}
.r-block:last-child { margin-bottom: 0; }
.r-block.revealed   { opacity: 1; transform: translateY(0); }
.r-block--exp   { transition-delay: 0.08s; }
.r-block--certs { transition-delay: 0.12s; }

/* ── BLOCK HEADER — creative titles ── */
.r-block-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
}

.r-block-num {
  font-family: var(--font-upright);
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.18em;
  color: var(--crimson);
  opacity: 0.55;
  flex-shrink: 0;
}

/* creative split title: normal + italic */
.r-block-title {
  font-family: var(--font-upright);
  font-size: clamp(22px, 2.8vw, 34px);
  font-weight: 300;
  color: var(--bark);
  white-space: nowrap;
  line-height: 1;
}
.r-block-title em {
  font-style: italic;
  color: var(--crimson);
  font-weight: 400;
}

.r-block-rule {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(127,1,31,0.18), transparent);
  position: relative;
  overflow: hidden;
}
.r-block-rule::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(127,1,31,0.5), transparent);
  transform: translateX(-100%);
  animation: ruleShimmer 3.5s ease-in-out infinite;
}
@keyframes ruleShimmer {
  0%        { transform: translateX(-100%); }
  50%, 100% { transform: translateX(200%); }
}

/* ══════════════════════════════════════
   EDUCATION
══════════════════════════════════════ */
.edu-list { display: flex; flex-direction: column; }

.edu-row {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 18px 10px;
  border-bottom: 1px solid rgba(127,1,31,0.06);
  cursor: default;
  border-radius: 5px;
  transition: background 0.22s;
}
.edu-row:last-child { border-bottom: none; padding-bottom: 0; }
.edu-row.active { background: rgba(127,1,31,0.035); }

.edu-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  flex-shrink: 0;
  width: 12px;
}

.edu-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  border: 1.5px solid var(--crimson);
  background: var(--warm-white);
  flex-shrink: 0;
  transition: background 0.2s, transform 0.2s;
}
.edu-row.active .edu-dot {
  background: var(--crimson);
  transform: scale(1.25);
}

.edu-track {
  width: 1px; flex: 1;
  min-height: 14px;
  background: rgba(127,1,31,0.15);
  margin-top: 4px;
}

.edu-content { flex: 1; }

.edu-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
  flex-wrap: wrap;
}

.edu-year {
  font-family: var(--font-sans);
  font-size: 7px;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--cream);
  background: var(--crimson);
  padding: 3px 8px;
  border-radius: 2px;
  white-space: nowrap;
}

.edu-school {
  font-size: 11px;
  color: var(--stone);
  font-style: italic;
}

.edu-degree {
  font-family: var(--font-upright);
  font-size: 16px;
  font-weight: 400;
  color: var(--bark);
  line-height: 1.3;
  margin-bottom: 8px;
}

.edu-honors { display: flex; flex-wrap: wrap; gap: 5px; }

.honor-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-sans);
  font-size: 6.5px;
  font-weight: 400;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: rgba(180,140,50,0.9);
  background: rgba(201,168,76,0.09);
  border: 1px solid rgba(201,168,76,0.22);
  padding: 3px 8px 3px 6px;
  border-radius: 2px;
  transition: background 0.2s, border-color 0.2s;
}
.edu-row.active .honor-chip {
  background: rgba(201,168,76,0.16);
  border-color: rgba(201,168,76,0.42);
}

/* ══════════════════════════════════════
   EXPERIENCE
══════════════════════════════════════ */
.exp-card {
  background: var(--cream);
  border: 1px solid rgba(127,1,31,0.1);
  padding: 24px 26px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.exp-card:hover {
  border-color: rgba(127,1,31,0.28);
  box-shadow: 0 6px 24px rgba(127,1,31,0.07);
}
.exp-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  background: var(--crimson);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s cubic-bezier(.22,.68,0,1.2);
}
.exp-card:hover::before { transform: scaleY(1); }

.exp-top-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.exp-title-group { flex: 1; }

.exp-year {
  font-family: var(--font-sans);
  font-size: 7px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--crimson);
  opacity: 0.7;
  display: block;
  margin-bottom: 4px;
}

.exp-role {
  font-family: var(--font-upright);
  font-size: clamp(17px, 2vw, 22px);
  font-weight: 400;
  color: var(--bark);
  line-height: 1.2;
}

.exp-live {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.pulse-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #4ade80;
  flex-shrink: 0;
  position: relative;
}
.pulse-dot::before {
  content: '';
  position: absolute; inset: -4px;
  border-radius: 50%;
  background: rgba(74,222,128,0.2);
  animation: pd 1.8s ease-out infinite;
}
@keyframes pd {
  0%   { transform: scale(0.6); opacity: 1; }
  100% { transform: scale(2.2); opacity: 0; }
}

.pulse-label {
  font-family: var(--font-sans);
  font-size: 7px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(74,222,128,0.7);
}

.exp-desc {
  font-size: 13px;
  line-height: 1.78;
  color: var(--stone);
  margin-bottom: 14px;
}

.exp-chips { display: flex; flex-wrap: wrap; gap: 5px; }

.chip {
  font-family: var(--font-sans);
  font-size: 7px;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border: 1px solid rgba(127,1,31,0.16);
  color: var(--crimson);
  border-radius: 2px;
  transition: background 0.18s, border-color 0.18s;
  cursor: default;
}
.chip:hover {
  background: rgba(127,1,31,0.06);
  border-color: rgba(127,1,31,0.35);
}

/* ══════════════════════════════════════
   CERTIFICATIONS — card grid
══════════════════════════════════════ */
.cert-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.cert-card {
  position: relative;
  background: var(--cream);
  border: 1px solid rgba(127,1,31,0.1);
  border-radius: 6px;
  padding: 18px 18px 16px;
  overflow: hidden;
  cursor: default;
  opacity: 0;
  transform: translateY(14px);
  transition:
    opacity 0.4s ease calc(var(--ci) * 0.07s),
    transform 0.4s cubic-bezier(.22,.68,0,1.2) calc(var(--ci) * 0.07s),
    border-color 0.3s,
    box-shadow 0.3s,
    background 0.3s;
}
.revealed .cert-card {
  opacity: 1;
  transform: translateY(0);
}
.cert-card:hover,
.cert-card.active {
  border-color: rgba(127,1,31,0.3);
  box-shadow: 0 8px 28px rgba(127,1,31,0.09);
  background: var(--warm-white);
}

/* hover glow effect */
.cc-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(127,1,31,0.06) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.35s;
  pointer-events: none;
}
.cert-card:hover .cc-glow,
.cert-card.active .cc-glow { opacity: 1; }

/* card top row */
.cc-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

.cc-idx {
  font-family: var(--font-upright);
  font-size: 26px;
  font-weight: 300;
  line-height: 1;
  color: rgba(127,1,31,0.1);
  transition: color 0.3s;
}
.cert-card.active .cc-idx,
.cert-card:hover .cc-idx { color: rgba(127,1,31,0.2); }

.cc-check {
  width: 22px; height: 22px;
  border-radius: 50%;
  border: 1px solid rgba(127,1,31,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(127,1,31,0.2);
  transition: background 0.3s, border-color 0.3s, color 0.3s, transform 0.3s cubic-bezier(.22,.68,0,1.5);
  flex-shrink: 0;
}
.cc-check.lit {
  background: #4ade80;
  border-color: #4ade80;
  color: white;
  transform: scale(1.15) rotate(5deg);
}

.cc-org {
  font-family: var(--font-sans);
  font-size: 7px;
  font-weight: 300;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--stone);
  display: block;
  margin-bottom: 5px;
  opacity: 0.7;
}

.cc-name {
  font-family: var(--font-upright);
  font-size: 14px;
  font-weight: 400;
  color: var(--bark);
  line-height: 1.35;
  margin-bottom: 12px;
  flex: 1;
}

.cc-bar {
  height: 1.5px;
  background: rgba(127,1,31,0.08);
  overflow: hidden;
  border-radius: 1px;
}

.cc-bar-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--crimson), rgba(200,60,80,0.4));
  transition: width 0.5s cubic-bezier(.22,.68,0,1.2);
}
.cc-bar-fill.grow { width: 100%; }

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 1100px) {
  .r-header { padding: 96px 48px 56px; }
  .r-col { padding: 48px 44px; }
  .cert-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 900px) {
  .r-body { grid-template-columns: 1fr; }
  .r-col-left { border-right: none; border-bottom: 1px solid rgba(127,1,31,0.08); }
  .r-col-right { background: none; }
  .cert-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .r-header { padding: 88px 24px 48px; }
  .rh-inner { flex-direction: column; align-items: flex-start; gap: 28px; }
  .rh-right { align-items: flex-start; width: 100%; flex-direction: row; flex-wrap: wrap; justify-content: space-between; }
  .rh-stats { gap: 20px; }
  .rh-actions { gap: 10px; flex-wrap: wrap; }
  .r-col { padding: 40px 24px; }
  .rh-ghost { font-size: 80px; }
  .cert-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .rh-char { font-size: clamp(32px, 9vw, 52px); }
  .cert-grid { grid-template-columns: 1fr 1fr; }
  .rh-actions { flex-direction: column; align-items: flex-start; }
}
</style>