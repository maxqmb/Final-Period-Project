<!-- src/views/HomePage.vue -->
<template>
  <main id="home" aria-label="Home">

    <!-- ── HERO ── -->
    <section class="home-hero">
      <div class="home-left" style="position:relative;overflow:hidden;">
        <canvas ref="heroCanvas" id="hero-canvas" aria-hidden="true"></canvas>
        <div class="home-left-content">

          <!-- Name — dotless ı + SVG star as the dot -->
          <h1 class="home-name">
            Maxene Qu<span class="i-special">ı<span class="i-star" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L13.76 7.06L20.49 4.51L16.94 11.24L24 13L16.94 14.76L20.49 20.49L13.76 16.94L12 24L10.24 16.94L3.51 20.49L7.06 14.76L0 13L7.06 11.24L3.51 4.51L10.24 7.06Z" fill="currentColor"/></svg></span></span>ambao
          </h1>

          <!-- Tagline -->
          <p class="home-title">Crafting digital experiences with precision &amp; heart.</p>

          <!-- Profession pill — below tagline -->
          <div class="home-eyebrow-wrap">
            <span class="eyebrow-dot" aria-hidden="true"></span>
            <p class="home-eyebrow">Frontend Developer &amp; UI/UX Designer</p>
          </div>

          <!-- CTA row -->
          <div class="home-cta-row">
            <router-link to="/projects" class="btn-primary">
              <span class="btn-primary-bg" aria-hidden="true"></span>
              <span class="btn-primary-label">View Portfolio</span>
              <svg class="btn-primary-arrow" width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
            <router-link to="/about" class="btn-ghost">
              <span class="btn-ghost-label">About Me</span>
            </router-link>
          </div>

        </div>
      </div>
    </section>

    <!-- ── FEATURED PROJECTS ── -->
    <section class="projects-section" aria-label="Featured Projects">

      <div class="projects-header">
        <div class="projects-eyebrow">
          <span class="projects-eyebrow-line" aria-hidden="true"></span>
          Featured Work
          <span class="projects-eyebrow-line" aria-hidden="true"></span>
        </div>
        <h2 class="projects-heading">Selected <em>Projects</em></h2>
        <p class="projects-subhead">A glimpse into what I've built — and how I think.</p>
      </div>

      <div class="projects-grid">

        <!-- Project 1: SplitSmart -->
        <div class="project-card" :class="{ 'in-view': card1Visible }" ref="card1">
          <div class="project-card-inner">
            <div class="project-visual">
              <div class="project-img-container">
                <img
                  src="/assets/splitsmart-preview.jpg"
                  alt="SplitSmart project screenshot"
                  class="project-screenshot"
                  onerror="this.style.display='none';this.nextElementSibling.style.removeProperty('display')"
                />
                <div class="project-img-placeholder">
                  <span class="placeholder-icon">⬜</span>
                  <span class="placeholder-text">splitsmart-preview.jpg</span>
                </div>
                <div class="project-img-overlay">
                  <span class="overlay-label">SplitSmart</span>
                </div>
              </div>
            </div>
            <div class="project-info">
              <div class="project-number" aria-hidden="true">01</div>
              <h3 class="project-title">SplitSmart</h3>
              <p class="project-desc">A web application designed to help friends and families split bills easily and accurately, simplifying shared expenses for groups.</p>
              <div class="project-actions">
                <router-link to="/projects" class="project-btn">
                  <span>View Project</span>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2: Non Ta Mangan -->
        <div class="project-card project-card--alt" :class="{ 'in-view': card2Visible }" ref="card2">
          <div class="project-card-inner">
            <div class="project-info">
              <div class="project-number" aria-hidden="true">02</div>
              <h3 class="project-title">Non Ta Mangan</h3>
              <p class="project-desc">A food discovery platform that lets users search food types, read reviews, and use a spin-the-wheel feature for indecisive diners.</p>
              <div class="project-actions">
                <router-link to="/projects" class="project-btn">
                  <span>View Project</span>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </router-link>
              </div>
            </div>
            <div class="project-visual">
              <div class="project-img-container">
                <img
                  src="/assets/nontamangan-preview.jpg"
                  alt="Non Ta Mangan project screenshot"
                  class="project-screenshot"
                  onerror="this.style.display='none';this.nextElementSibling.style.removeProperty('display')"
                />
                <div class="project-img-placeholder">
                  <span class="placeholder-icon">⬜</span>
                  <span class="placeholder-text">nontamangan-preview.jpg</span>
                </div>
                <div class="project-img-overlay">
                  <span class="overlay-label">Non Ta Mangan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="projects-cta">
        <router-link to="/projects" class="projects-cta-btn">
          <span>View All Projects</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </router-link>
      </div>

    </section>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroCanvas = ref(null)
const card1 = ref(null)
const card2 = ref(null)
const card1Visible = ref(false)
const card2Visible = ref(false)
let animId = null

function initCanvas() {
  const canvas = heroCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  function resize() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)
  const orbs = Array.from({ length: 7 }, () => ({
    x: Math.random(), y: Math.random(),
    r: 80 + Math.random() * 180,
    vx: (Math.random() - 0.5) * 0.00015,
    vy: (Math.random() - 0.5) * 0.00015,
    opacity: 0.04 + Math.random() * 0.07,
    phase: Math.random() * Math.PI * 2,
    speed: 0.0004 + Math.random() * 0.0006,
  }))
  const particles = Array.from({ length: 40 }, () => ({
    x: Math.random(), y: Math.random(),
    size: 0.5 + Math.random() * 1.5,
    vx: (Math.random() - 0.5) * 0.00008,
    vy: -0.00005 - Math.random() * 0.0001,
    opacity: 0.1 + Math.random() * 0.25,
    life: Math.random(),
  }))
  let t = 0
  function draw() {
    const W = canvas.width, H = canvas.height
    t++
    ctx.fillStyle = '#3d000e'
    ctx.fillRect(0, 0, W, H)
    const time = t * 0.003
    for (let i = 0; i < 5; i++) {
      const yBase = H * (0.2 + i * 0.18)
      const amp = H * (0.08 + i * 0.03)
      const freq = 0.003 + i * 0.0008
      const phase = time * (0.4 + i * 0.15) + i * 1.2
      const alpha = 0.06 + i * 0.012
      ctx.beginPath()
      ctx.moveTo(0, H)
      for (let x = 0; x <= W; x += 3) {
        const y = yBase + Math.sin(x * freq + phase) * amp + Math.sin(x * freq * 2.3 + phase * 0.7) * amp * 0.4
        ctx.lineTo(x, y)
      }
      ctx.lineTo(W, H)
      ctx.closePath()
      const isGold = i % 2 === 0
      const gradient = ctx.createLinearGradient(0, yBase - amp, 0, yBase + amp * 2)
      if (isGold) {
        gradient.addColorStop(0, `rgba(201,168,76,${alpha * 1.4})`)
        gradient.addColorStop(1, `rgba(127,1,31,0)`)
      } else {
        gradient.addColorStop(0, `rgba(163,2,42,${alpha * 1.8})`)
        gradient.addColorStop(1, `rgba(60,0,10,0)`)
      }
      ctx.fillStyle = gradient
      ctx.fill()
    }
    orbs.forEach(o => {
      o.phase += o.speed
      o.x += o.vx + Math.sin(o.phase) * 0.0003
      o.y += o.vy + Math.cos(o.phase * 0.6) * 0.0002
      if (o.x < -0.3) o.x = 1.3
      if (o.x > 1.3) o.x = -0.3
      if (o.y < -0.3) o.y = 1.3
      if (o.y > 1.3) o.y = -0.3
      const gx = o.x * W, gy = o.y * H
      const r = o.r * (Math.min(W, H) / 600)
      const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, r)
      g.addColorStop(0, `rgba(201,168,76,${o.opacity * 1.2})`)
      g.addColorStop(0.35, `rgba(163,2,42,${o.opacity * 0.6})`)
      g.addColorStop(1, `rgba(127,1,31,0)`)
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(gx, gy, r, 0, Math.PI * 2)
      ctx.fill()
    })
    particles.forEach(p => {
      p.life += 0.0025
      p.x += p.vx
      p.y += p.vy
      if (p.y < -0.04 || p.life > 1) {
        p.x = Math.random(); p.y = 1.04; p.life = 0
        p.vx = (Math.random() - 0.5) * 0.00006
        p.vy = -0.00004 - Math.random() * 0.00009
      }
      const fade = Math.sin(p.life * Math.PI)
      ctx.fillStyle = `rgba(226,196,122,${p.opacity * fade})`
      ctx.beginPath()
      ctx.arc(p.x * W, p.y * H, p.size, 0, Math.PI * 2)
      ctx.fill()
    })
    const vig = ctx.createRadialGradient(W/2, H/2, H*0.1, W/2, H/2, W*0.85)
    vig.addColorStop(0, 'rgba(0,0,0,0)')
    vig.addColorStop(1, 'rgba(20,0,5,0.72)')
    ctx.fillStyle = vig
    ctx.fillRect(0, 0, W, H)
    animId = requestAnimationFrame(draw)
  }
  draw()
}

function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.target === card1.value && entry.isIntersecting) card1Visible.value = true
      if (entry.target === card2.value && entry.isIntersecting) card2Visible.value = true
    })
  }, { threshold: 0.12 })
  if (card1.value) observer.observe(card1.value)
  if (card2.value) observer.observe(card2.value)
}

onMounted(() => {
  initCanvas()
  setTimeout(initScrollObserver, 100)
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
})
</script>

<style scoped>
#home { position: relative; overflow: hidden; }

#hero-canvas {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  z-index: 0; pointer-events: none;
}

.home-hero { min-height: 100vh; display: flex; position: relative; }

.home-left {
  background: var(--crimson);
  position: relative; display: flex; flex-direction: column;
  justify-content: center; padding: 0; overflow: hidden;
  z-index: 1; flex: 1; min-height: 100vh;
}

.home-left-content {
  position: relative; z-index: 2;
  display: flex; flex-direction: column;
  justify-content: center; align-items: center; text-align: center;
  padding: 80px 8%;
  height: 100%; width: 100%;
}

/* ─────────────────────────────
   NAME
───────────────────────────── */
.home-name {
  font-family: var(--font-upright);
  font-size: clamp(52px, 7vw, 96px);
  font-weight: 300; line-height: 1.05;
  color: var(--cream);
  margin-bottom: 22px;
  opacity: 0;
  animation: revealUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s forwards;
  white-space: nowrap;
  overflow: visible;
}
@keyframes revealUp {
  from { opacity: 0; transform: translateY(40px) skewY(2deg); }
  to   { opacity: 1; transform: translateY(0) skewY(0deg); }
}

.i-special {
  position: relative;
  display: inline-block;
  overflow: visible;
}

.i-star {
  position: absolute;
  top: 0.07em;
  left: 50%;
  transform: translateX(-50%);
  width: 0.2em;
  height: 0.2em;
  color: var(--gold);
  display: flex; align-items: center; justify-content: center;
  filter: drop-shadow(0 0 3px rgba(201,168,76,1)) drop-shadow(0 0 8px rgba(201,168,76,0.6));
  pointer-events: none;
  animation: iStarSpin 2.8s linear infinite, iStarBounce 1.6s ease-in-out infinite;
  transform-origin: center;
}
.i-star svg { width: 100%; height: 100%; display: block; }

@keyframes iStarSpin {
  from { transform: translateX(-50%) rotate(0deg); }
  to   { transform: translateX(-50%) rotate(360deg); }
}
@keyframes iStarBounce {
  0%, 100% { margin-top: 0; }
  50%       { margin-top: -0.07em; }
}

.name-end { position: relative; display: inline; }
.cursor-blink {
  display: inline-block;
  font-style: normal;
  color: var(--gold-light);
  font-family: var(--font-upright);
  font-size: 0.82em;
  line-height: 1;
  vertical-align: baseline;
  margin-left: 0;
  position: relative;
  top: 0.06em;
}

/* ─────────────────────────────
   TAGLINE
───────────────────────────── */
.home-title {
  font-family: var(--font-display);
  font-size: clamp(15px, 1.7vw, 19px);
  font-weight: 300; font-style: italic;
  color: rgba(245,235,208,0.55);
  margin-bottom: 22px;
  letter-spacing: 0.03em;
  opacity: 0; animation: fadeUp 0.8s ease 0.6s forwards;
  max-width: 520px;
}

/* ─────────────────────────────
   PROFESSION PILL — below tagline
───────────────────────────── */
.home-eyebrow-wrap {
  display: inline-flex; align-items: center; gap: 10px;
  background: rgba(245,235,208,0.07);
  border: 1px solid rgba(245,235,208,0.15);
  border-radius: 100px;
  padding: 8px 18px 8px 12px;
  margin-bottom: 44px;
  opacity: 0; animation: fadeUp 0.7s ease 0.72s forwards;
  backdrop-filter: blur(6px);
}
.eyebrow-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 8px rgba(201,168,76,0.9);
  animation: dotPulse 2s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes dotPulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 6px rgba(201,168,76,0.8); }
  50%       { transform: scale(1.3); box-shadow: 0 0 14px rgba(201,168,76,1); }
}
.home-eyebrow {
  font-family: var(--font-sans);
  font-size: 9px; font-weight: 400;
  letter-spacing: 0.28em; text-transform: uppercase;
  color: rgba(245,235,208,0.85); margin: 0;
}

/* ─────────────────────────────
   CTA BUTTONS — sharp, minimal, architectural
───────────────────────────── */
.home-cta-row {
  display: flex; align-items: center; justify-content: center; gap: 14px;
  opacity: 0; animation: fadeUp 0.8s ease 0.88s forwards;
}

/* ── Primary: solid cream, left-wipe dark fill on hover ── */
.btn-primary {
  display: inline-flex; align-items: center; gap: 12px;
  background: var(--cream); color: var(--crimson);
  font-family: var(--font-sans); font-size: 9px; font-weight: 700;
  letter-spacing: 0.26em; text-transform: uppercase;
  padding: 16px 32px;
  text-decoration: none;
  /* Intentionally very small radius — 3px is barely there, feels deliberate */
  border-radius: 3px;
  border: 1.5px solid var(--cream);
  position: relative; overflow: hidden;
  transition: color 0.32s ease, border-color 0.32s ease;
}
.btn-primary-bg {
  position: absolute; inset: 0;
  background: var(--charcoal);
  /* Wipe in from left */
  transform: translateX(-101%);
  transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
}
.btn-primary-label,
.btn-primary-arrow {
  position: relative; z-index: 1;
}
.btn-primary-arrow {
  transition: transform 0.28s ease;
  flex-shrink: 0;
}
.btn-primary:hover {
  color: var(--cream);
  border-color: rgba(245,235,208,0.18);
}
.btn-primary:hover .btn-primary-bg { transform: translateX(0); }
.btn-primary:hover .btn-primary-arrow { transform: translateX(3px); }

/* ── Ghost: bare outline only, no background ── */
.btn-ghost {
  display: inline-flex; align-items: center;
  background: transparent;
  border: 1.5px solid rgba(245,235,208,0.22);
  color: rgba(245,235,208,0.58);
  font-family: var(--font-sans); font-size: 9px; font-weight: 400;
  letter-spacing: 0.26em; text-transform: uppercase;
  padding: 16px 32px;
  text-decoration: none;
  border-radius: 3px;
  position: relative; overflow: hidden;
  transition: color 0.28s ease, border-color 0.28s ease;
}
.btn-ghost::before {
  content: '';
  position: absolute; inset: 0;
  /* Almost invisible tint — just enough to signal hover */
  background: rgba(245,235,208,0.05);
  opacity: 0;
  transition: opacity 0.28s ease;
}
.btn-ghost-label { position: relative; z-index: 1; }
.btn-ghost:hover {
  color: var(--cream);
  border-color: rgba(245,235,208,0.48);
}
.btn-ghost:hover::before { opacity: 1; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ═══════════════════════════════════════
   FEATURED PROJECTS
═══════════════════════════════════════ */
.projects-section {
  background: var(--charcoal);
  padding: 96px 80px 112px;
  position: relative; overflow: hidden;
}
.projects-section::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    radial-gradient(ellipse 50% 60% at 10% 20%, rgba(127,1,31,0.1) 0%, transparent 60%),
    radial-gradient(ellipse 40% 50% at 90% 80%, rgba(201,168,76,0.06) 0%, transparent 55%);
  pointer-events: none;
}

/* Header */
.projects-header { text-align: center; margin-bottom: 72px; position: relative; z-index: 1; }
.projects-eyebrow {
  display: inline-flex; align-items: center; gap: 14px;
  font-family: var(--font-sans); font-size: 8.5px; font-weight: 300;
  letter-spacing: 0.35em; text-transform: uppercase;
  color: rgba(201,168,76,0.7); margin-bottom: 20px;
}
.projects-eyebrow-line { display: block; width: 32px; height: 1px; background: rgba(201,168,76,0.4); }
.projects-heading {
  font-family: var(--font-upright);
  font-size: clamp(36px, 4.5vw, 58px); font-weight: 300;
  color: var(--cream); line-height: 1.1; margin-bottom: 14px;
}
.projects-heading em { font-style: italic; color: var(--crimson); filter: brightness(1.4); }
.projects-subhead {
  font-family: var(--font-display); font-size: 15px; font-style: italic;
  color: rgba(245,235,208,0.4); letter-spacing: 0.02em;
}

/* Grid */
.projects-grid {
  display: flex; flex-direction: column; gap: 28px;
  position: relative; z-index: 1;
  max-width: 1100px; margin: 0 auto;
}

/* Card */
.project-card {
  opacity: 0; transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
}
.project-card.in-view { opacity: 1; transform: translateY(0); }
.project-card--alt { transition-delay: 0.14s; }

.project-card-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  border: 1px solid rgba(245,235,208,0.07);
  border-radius: 20px; overflow: hidden;
  background: rgba(245,235,208,0.025);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover .project-card-inner {
  border-color: rgba(245,235,208,0.13);
  box-shadow: 0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,168,76,0.07);
}

/* Image panel */
.project-visual { position: relative; overflow: hidden; min-height: 360px; background: #0a0404; }
.project-img-container { position: absolute; inset: 0; }

.project-screenshot {
  width: 100%; height: 100%;
  object-fit: cover; object-position: top center;
  display: block;
  transition: transform 0.65s cubic-bezier(0.16,1,0.3,1);
}
.project-card:hover .project-screenshot { transform: scale(1.05); }

.project-img-placeholder {
  display: none;
  position: absolute; inset: 0;
  flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  background: rgba(10,5,3,0.7);
}
.placeholder-icon { font-size: 24px; opacity: 0.3; }
.placeholder-text {
  font-family: var(--font-sans); font-size: 8px; letter-spacing: 0.18em;
  text-transform: uppercase; color: rgba(245,235,208,0.2);
}

.project-img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(12,4,4,0.8) 0%, transparent 50%);
  opacity: 0; transition: opacity 0.35s ease;
  display: flex; align-items: flex-end; padding: 24px;
}
.project-card:hover .project-img-overlay { opacity: 1; }
.overlay-label {
  font-family: var(--font-upright); font-size: 20px; font-weight: 300;
  color: var(--cream); letter-spacing: 0.02em;
}

/* Info panel */
.project-info {
  padding: 52px 48px;
  display: flex; flex-direction: column; justify-content: center; gap: 18px;
  position: relative;
}
.project-number {
  font-family: var(--font-upright); font-size: 88px; font-weight: 300;
  color: rgba(245,235,208,0.035); line-height: 1;
  user-select: none; position: absolute; top: 18px; right: 30px;
}
.project-title {
  font-family: var(--font-upright);
  font-size: clamp(28px, 3vw, 40px); font-weight: 300;
  color: var(--cream); line-height: 1.1; margin: 0;
}
.project-desc {
  font-family: var(--font-display); font-size: 14.5px; line-height: 1.78;
  color: rgba(245,235,208,0.5); max-width: 360px;
}
.project-actions { margin-top: 6px; }
.project-btn {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-sans); font-size: 9px; font-weight: 500;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--cream); text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(245,235,208,0.2);
  transition: all 0.25s ease;
}
.project-btn:hover { color: var(--gold); border-bottom-color: rgba(201,168,76,0.5); gap: 15px; }
.project-btn svg { transition: transform 0.25s ease; }
.project-btn:hover svg { transform: translateX(4px); }

/* CTA */
.projects-cta { text-align: center; margin-top: 64px; position: relative; z-index: 1; }
.projects-cta-btn {
  display: inline-flex; align-items: center; gap: 12px;
  font-family: var(--font-sans); font-size: 9px; font-weight: 400;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(245,235,208,0.5); text-decoration: none;
  border: 1px solid rgba(245,235,208,0.14); padding: 15px 32px;
  /* Match the 3px theme on hero buttons */
  border-radius: 3px;
  transition: all 0.3s ease; backdrop-filter: blur(4px);
}
.projects-cta-btn:hover {
  color: var(--cream); border-color: rgba(245,235,208,0.38);
  background: rgba(245,235,208,0.05); gap: 16px;
}
.projects-cta-btn svg { transition: transform 0.25s ease; }
.projects-cta-btn:hover svg { transform: translateX(4px); }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .projects-section { padding: 80px 48px 96px; }
  .project-info { padding: 40px 36px; }
}
@media (max-width: 768px) {
  .home-left { min-height: 100svh; }
  .home-left-content { padding: 80px 16px 60px; }
  .home-name { font-size: clamp(24px, 8.5vw, 54px); white-space: nowrap; }
  .home-title { font-size: 15px; margin-bottom: 18px; }
  .home-cta-row { flex-direction: column; align-items: center; gap: 12px; width: 100%; max-width: 300px; }
  .btn-primary, .btn-ghost { width: 100%; justify-content: center; }
  .projects-section { padding: 64px 24px 80px; }
  .project-card-inner { grid-template-columns: 1fr; }
  .project-card--alt .project-card-inner { display: flex; flex-direction: column-reverse; }
  .project-visual { min-height: 240px; }
  .project-info { padding: 32px 28px; }
  .project-number { font-size: 60px; }
}
@media (max-width: 420px) {
  .home-name { font-size: clamp(22px, 8vw, 42px); white-space: nowrap; }
  .home-eyebrow { font-size: 7.5px; letter-spacing: 0.18em; }
  .home-eyebrow-wrap { padding: 7px 12px 7px 10px; }
}
@media (max-width: 360px) {
  .home-name { font-size: 7.8vw; white-space: nowrap; }
}
</style>