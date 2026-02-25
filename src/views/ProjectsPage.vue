<!-- src/views/ProjectsPage.vue -->
<template>
  <main id="projects" aria-label="Projects">
    <section class="projects-hero">
      <!-- NEW: Unique animated background -->
      <div class="hero-bg" aria-hidden="true">
        <canvas class="hero-canvas" ref="heroCanvas"></canvas>
        <div class="hero-vignette"></div>
      </div>

      <div class="hero-content">
        <p class="page-eyebrow">
          <span class="eyebrow-line"></span>
          Selected Work
          <span class="eyebrow-count">{{ projects.length }} Projects</span>
        </p>
        <h1 class="page-title">
          <span class="title-line">Pro</span><span class="title-line title-italic">jects</span>
        </h1>
        <p class="projects-intro">
          Every project here started as a problem worth solving — and ended as something I'm proud to ship.
          From pixel-perfect interfaces to full ordering flows, this is where ideas stop being ideas.
        </p>
      </div>
      <div class="hero-orb" aria-hidden="true"></div>
      <div class="hero-orb hero-orb-2" aria-hidden="true"></div>
    </section>

    <section class="projects-list">
      <article
        class="project-entry"
        v-for="(proj, i) in projects"
        :key="proj.id"
        :aria-label="'Project: ' + proj.name"
        ref="projectEntries"
      >
        <!-- Horizontal rule with index -->
        <div class="entry-rule">
          <span class="rule-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="rule-line"></div>
        </div>

        <!-- Main project grid: left info col, right screenshots col -->
        <div class="project-grid">

          <!-- LEFT: info -->
          <div class="project-info">
            <div class="project-title-wrap">
              <h2 class="project-title">{{ proj.name }}</h2>
            </div>

            <div class="project-desc">
              <p>{{ proj.desc }}</p>
              <p>{{ proj.features }}</p>
            </div>

            <div class="project-tech">
              <div class="tech-label">Stack</div>
              <div class="tag-row">
                <span class="tag" v-for="t in proj.tags" :key="t">{{ t }}</span>
              </div>
            </div>

            <div class="project-links">
              <a v-if="proj.demo" :href="proj.demo" class="link-btn link-btn-primary" target="_blank" rel="noopener">
                <span class="btn-inner">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M1 6H11M6 1L11 6L6 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  Live Demo
                </span>
                <span class="btn-hover-fill"></span>
              </a>
              <a :href="proj.github" class="link-btn link-btn-secondary" target="_blank" rel="noopener">
                <span class="btn-inner">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </span>
                <span class="btn-hover-fill"></span>
              </a>
            </div>
          </div>

          <!-- RIGHT: screenshots -->
          <div class="project-screenshots">
            <div class="screenshot screenshot-main" @mouseenter="onSsHover" @mouseleave="onSsLeave">
              <img v-if="proj.id === 1" src="/assets/projects/buffs-chicken1.png" alt="Buffs Chicken preview" class="screenshot-img screenshot-img--main" />
              <div class="screenshot-shimmer"></div>
              <span class="screenshot-label" v-if="proj.id !== 1">Preview</span>
              <span class="screenshot-corner tl"></span>
              <span class="screenshot-corner tr"></span>
              <span class="screenshot-corner bl"></span>
              <span class="screenshot-corner br"></span>
            </div>
            <div class="screenshot-sub-row">
              <div class="screenshot screenshot-sub" @mouseenter="onSsHover" @mouseleave="onSsLeave">
                <img v-if="proj.id === 1" src="/assets/projects/buffs-chicken2.png" alt="Buffs Chicken detail" class="screenshot-img screenshot-img--sub" />
                <div class="screenshot-shimmer"></div>
                <span class="screenshot-label" v-if="proj.id !== 1">Detail</span>
              </div>
              <div class="screenshot screenshot-sub" @mouseenter="onSsHover" @mouseleave="onSsLeave">
                <img v-if="proj.id === 1" src="/assets/projects/buffs-chicken3.png" alt="Buffs Chicken mobile" class="screenshot-img screenshot-img--sub" />
                <div class="screenshot-shimmer"></div>
                <span class="screenshot-label" v-if="proj.id !== 1">Mobile</span>
              </div>
            </div>
          </div>

        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const projectEntries = ref([])
const heroCanvas = ref(null)
let animFrame = null

const projects = [
  {
    id: 1, name: 'Buffs Chicken',
    desc: 'A full-featured ordering and business website for Buffs Chicken, a local restaurant brand. Customers can browse the menu, place orders, and explore the brand story — all in one seamless experience.',
    features: 'Includes an interactive menu with category filters, an online ordering flow, business information pages, and a mobile-responsive layout built to reflect the restaurant\'s bold identity.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
    demo: '#', github: '#',
  },
  {
    id: 2, name: 'SplitSmart',
    desc: 'A web application designed to help friends and families split bills easily and accurately.',
    features: 'Features include group creation, itemized bill splitting, equal and custom splits, and a summary view.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
    demo: '#', github: '#',
  },
  {
    id: 3, name: 'Non Ta Mangan',
    desc: 'A food discovery platform that allows users to search for specific food types, read reviews, and use a spin-the-wheel feature.',
    features: 'Includes category browsing, user-submitted reviews, and a randomizer wheel powered by vanilla JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: '#', github: '#',
  },
  {
    id: 4, name: 'Muza De Cafe',
    desc: 'A promotional website for a local café in Concepcion, Tarlac, showcasing the menu, best sellers, and hours.',
    features: 'A clean, warm-themed static website with full menu showcase, location map embed, and mobile-responsive layout.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: null, github: '#',
  },
]

function onSsHover(e) {
  const el = e.currentTarget
  el.querySelector('.screenshot-shimmer').style.opacity = '1'
}
function onSsLeave(e) {
  const el = e.currentTarget
  el.querySelector('.screenshot-shimmer').style.opacity = '0'
}

// ─── UNIQUE CANVAS ANIMATION ────────────────────────────────
// Liquid ink-thread particles: glowing crimson threads that drift,
// connect when close, and pulse like a living circuit board.
function initCanvas() {
  const canvas = heroCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  const PARTICLE_COUNT = 55
  const CONNECTION_DIST = 130
  const COLOR_PRIMARY = '127,1,31'
  const COLOR_GOLD = '200,160,80'

  let W, H, particles

  function resize() {
    W = canvas.width = canvas.offsetWidth
    H = canvas.height = canvas.offsetHeight
  }

  class Particle {
    constructor() { this.reset(true) }
    reset(init) {
      this.x = Math.random() * W
      this.y = init ? Math.random() * H : (Math.random() < 0.5 ? -10 : H + 10)
      this.vx = (Math.random() - 0.5) * 0.45
      this.vy = (Math.random() - 0.5) * 0.45
      this.r = Math.random() * 1.6 + 0.5
      this.pulse = Math.random() * Math.PI * 2
      this.pulseSpeed = 0.012 + Math.random() * 0.018
      this.gold = Math.random() < 0.12
    }
    update() {
      this.x += this.vx
      this.y += this.vy
      this.pulse += this.pulseSpeed
      // Soft boundary bounce
      if (this.x < 0 || this.x > W) this.vx *= -1
      if (this.y < 0 || this.y > H) this.vy *= -1
    }
    draw() {
      const glow = (Math.sin(this.pulse) + 1) / 2
      const alpha = 0.35 + glow * 0.55
      const col = this.gold ? COLOR_GOLD : COLOR_PRIMARY
      // Outer glow
      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 5)
      grad.addColorStop(0, `rgba(${col},${(alpha * 0.7).toFixed(2)})`)
      grad.addColorStop(1, `rgba(${col},0)`)
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r * 5, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
      // Core dot
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${col},${alpha.toFixed(2)})`
      ctx.fill()
    }
  }

  function init() {
    resize()
    particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle())
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j]
        const dx = a.x - b.x, dy = a.y - b.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONNECTION_DIST) {
          const strength = 1 - dist / CONNECTION_DIST
          const pulseA = (Math.sin(a.pulse) + 1) / 2
          const pulseB = (Math.sin(b.pulse) + 1) / 2
          const pulse = (pulseA + pulseB) / 2
          const alpha = (strength * 0.22 + pulse * strength * 0.18).toFixed(3)
          const col = (a.gold || b.gold) ? COLOR_GOLD : COLOR_PRIMARY

          // Draw the thread with a slight glow
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          // Add a subtle bezier curve for organic feel
          const mx = (a.x + b.x) / 2 + (Math.sin(a.pulse * 0.7) * 8)
          const my = (a.y + b.y) / 2 + (Math.cos(b.pulse * 0.7) * 8)
          ctx.quadraticCurveTo(mx, my, b.x, b.y)
          ctx.strokeStyle = `rgba(${col},${alpha})`
          ctx.lineWidth = strength * 1.1 + pulse * 0.6
          ctx.stroke()
        }
      }
    }
  }

  // Occasional "spark" bursts along connections
  const sparks = []
  function maybeSpark() {
    if (Math.random() < 0.025 && particles.length > 1) {
      const a = particles[Math.floor(Math.random() * particles.length)]
      const b = particles[Math.floor(Math.random() * particles.length)]
      const dx = a.x - b.x, dy = a.y - b.y
      if (Math.sqrt(dx*dx+dy*dy) < CONNECTION_DIST) {
        sparks.push({ a, b, t: 0, gold: Math.random() < 0.3 })
      }
    }
  }

  function drawSparks() {
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i]
      s.t += 0.035
      if (s.t > 1) { sparks.splice(i, 1); continue }
      const x = s.a.x + (s.b.x - s.a.x) * s.t
      const y = s.a.y + (s.b.y - s.a.y) * s.t
      const alpha = Math.sin(s.t * Math.PI)
      const col = s.gold ? COLOR_GOLD : COLOR_PRIMARY
      ctx.beginPath()
      ctx.arc(x, y, 2.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${col},${(alpha * 0.9).toFixed(2)})`
      ctx.fill()
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H)
    maybeSpark()
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    drawConnections()
    drawSparks()
    particles.forEach(p => { p.update(); p.draw() })
    animFrame = requestAnimationFrame(loop)
  }

  window.addEventListener('resize', resize)
  init()
  loop()
}

onMounted(() => {
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.project-entry').forEach(el => observer.observe(el))

  // Canvas animation
  initCanvas()
})

onBeforeUnmount(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
})
</script>

<style scoped>
/* ─── RESET & ROOT ────────────────────────────────────────── */
#projects {
  background: var(--warm-white);
  overflow: hidden;
}

/* ─── HERO ────────────────────────────────────────────────── */
.projects-hero {
  background: var(--charcoal);
  padding: 100px 80px 80px;
  position: relative;
  overflow: hidden;
}

/* ─── NEW CANVAS BACKGROUND ───────────────────────────────── */
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

/* Soft vignette so canvas doesn't bleed into edges harshly */
.hero-vignette {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 60% at 100% 100%, rgba(127,1,31,0.18) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 0% 0%, rgba(30,20,15,0.6) 0%, transparent 70%),
    linear-gradient(180deg, transparent 50%, rgba(24,18,14,0.55) 100%);
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: orbPulse 8s ease-in-out infinite;
}

.hero-orb:first-of-type {
  bottom: -100px; right: -100px;
  width: 420px; height: 420px;
  background: radial-gradient(circle, rgba(127,1,31,0.22) 0%, transparent 70%);
}

.hero-orb-2 {
  top: -60px; left: 40%;
  width: 260px; height: 260px;
  background: radial-gradient(circle, rgba(200,160,80,0.08) 0%, transparent 70%);
  animation-delay: -4s;
}

@keyframes orbPulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50%       { transform: scale(1.1); opacity: 1; }
}

.hero-content { position: relative; z-index: 1; }

.page-eyebrow {
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 300;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.eyebrow-line {
  display: block;
  width: 32px; height: 1px;
  background: var(--gold-light);
}

.eyebrow-count {
  margin-left: auto;
  opacity: 0.5;
  font-size: 8px;
}

.page-title {
  font-family: var(--font-upright);
  font-size: clamp(56px, 7vw, 100px);
  font-weight: 300;
  line-height: 0.95;
  color: var(--cream);
  margin-bottom: 28px;
  display: flex;
  /* ↓ TIGHTER gap between Pro and jects */
  gap: 0.04em;
}

.title-italic {
  font-style: italic;
  color: rgba(245,235,208,0.45);
}

.projects-intro {
  font-size: 15px;
  line-height: 1.9;
  color: var(--stone-light);
  max-width: 500px;
}

/* ─── PROJECT LIST ────────────────────────────────────────── */
.projects-list {
  padding: 0 80px 100px;
}

/* ─── SCROLL ANIMATION ────────────────────────────────────── */
.project-entry {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(.22,.68,0,1.2), transform 0.7s cubic-bezier(.22,.68,0,1.2);
  padding: 72px 0;
  border-bottom: 1px solid rgba(127,1,31,0.08);
}

.project-entry:last-child { border-bottom: none; }

.project-entry.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── ENTRY RULE ──────────────────────────────────────────── */
.entry-rule {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.rule-num {
  font-family: var(--font-upright);
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.2em;
  color: var(--crimson);
  opacity: 0.7;
  flex-shrink: 0;
}

.rule-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(127,1,31,0.25) 0%, transparent 100%);
  position: relative;
  overflow: hidden;
}

.rule-line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(127,1,31,0.5), transparent);
  transform: translateX(-100%);
  animation: shimmerRule 3s ease-in-out infinite;
}

@keyframes shimmerRule {
  0%   { transform: translateX(-100%); }
  50%, 100% { transform: translateX(100%); }
}

/* ─── PROJECT GRID ────────────────────────────────────────── */
.project-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 60px;
  align-items: start;
}

/* ─── LEFT INFO ───────────────────────────────────────────── */
.project-info {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.project-title-wrap {
  overflow: hidden;
}

.project-title {
  font-family: var(--font-upright);
  font-size: clamp(38px, 4vw, 60px);
  font-weight: 400;
  color: var(--bark);
  line-height: 1.0;
  position: relative;
  display: inline-block;
}

.project-title::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--crimson);
  transition: width 0.5s cubic-bezier(.22,.68,0,1.2);
}

.project-entry:hover .project-title::after {
  width: 100%;
}

.project-desc {
  font-size: 15px;
  line-height: 1.85;
  color: var(--stone);
}

.project-desc p { margin-bottom: 12px; }
.project-desc p:last-child { margin-bottom: 0; }

.project-tech { display: flex; flex-direction: column; gap: 10px; }

.tech-label {
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 300;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--crimson);
}

.tag-row { display: flex; flex-wrap: wrap; gap: 6px; }

.tag {
  font-family: var(--font-sans);
  font-size: 7px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 10px;
  background: transparent;
  color: var(--crimson);
  border: 1px solid rgba(127,1,31,0.2);
  border-radius: 2px;
  transition: background 0.2s, border-color 0.2s;
}

.tag:hover {
  background: rgba(127,1,31,0.07);
  border-color: rgba(127,1,31,0.45);
}

/* ─── BUTTONS ─────────────────────────────────────────────── */
.project-links { display: flex; gap: 12px; flex-wrap: wrap; }

.link-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid;
  cursor: pointer;
}

.btn-inner {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  transition: color 0.3s;
}

.btn-hover-fill {
  position: absolute;
  inset: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s cubic-bezier(.22,.68,0,1.2);
  z-index: 1;
}

.link-btn:hover .btn-hover-fill { transform: scaleX(1); }

.link-btn-primary {
  border-color: var(--crimson);
  color: var(--crimson);
}
.link-btn-primary .btn-hover-fill { background: var(--crimson); }
.link-btn-primary:hover .btn-inner { color: var(--cream); }

.link-btn-secondary {
  border-color: rgba(100,90,80,0.35);
  color: var(--stone);
}
.link-btn-secondary .btn-hover-fill { background: var(--bark); }
.link-btn-secondary:hover .btn-inner { color: var(--cream); }

/* ─── SCREENSHOTS ─────────────────────────────────────────── */
.project-screenshots {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.screenshot {
  position: relative;
  background: rgba(240,233,215,0.55);
  border: 1px solid rgba(127,1,31,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s, transform 0.4s cubic-bezier(.22,.68,0,1.2), box-shadow 0.4s;
}

.screenshot:hover {
  border-color: rgba(127,1,31,0.4);
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(127,1,31,0.1);
}

.screenshot-main { aspect-ratio: 16/10; }
.screenshot-sub-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.screenshot-sub { aspect-ratio: 16/10; overflow: hidden; }

/* ─── IMAGE FIT ───────────────────────────────────────────── */
.screenshot-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
  object-fit: cover;
  object-position: right top;
  transition: transform 0.35s ease;
}

.screenshot-img--main { object-position: right top; }
.screenshot-img--sub  { object-position: right center; }

.screenshot:hover .screenshot-img { transform: scale(1.03); }

.screenshot-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  z-index: 1;
}

.screenshot-label {
  font-family: var(--font-sans);
  font-size: 7px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(127,1,31,0.3);
  position: relative;
  z-index: 2;
  transition: color 0.3s;
}

.screenshot:hover .screenshot-label { color: rgba(127,1,31,0.6); }

.screenshot-corner {
  position: absolute;
  width: 10px; height: 10px;
  border-color: rgba(127,1,31,0.35);
  border-style: solid;
  transition: width 0.3s, height 0.3s, border-color 0.3s;
  z-index: 3;
}
.screenshot-corner.tl { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
.screenshot-corner.tr { top: 8px; right: 8px; border-width: 1px 1px 0 0; }
.screenshot-corner.bl { bottom: 8px; left: 8px; border-width: 0 0 1px 1px; }
.screenshot-corner.br { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }

.screenshot:hover .screenshot-corner {
  width: 16px; height: 16px;
  border-color: rgba(127,1,31,0.65);
}

/* ─── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 1024px) {
  .projects-hero { padding: 80px 48px 60px; }
  .projects-list { padding: 0 48px 80px; }
  .project-grid { gap: 40px; }
}

@media (max-width: 768px) {
  .projects-hero { padding: 72px 24px 48px; }
  .projects-list { padding: 0 24px 60px; }

  .page-title { font-size: clamp(44px, 12vw, 72px); }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .project-title { font-size: clamp(28px, 8vw, 44px); }
  .screenshot-sub-row { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 420px) {
  .page-title { font-size: clamp(38px, 13vw, 56px); }
  .project-links { gap: 8px; }
}
</style>